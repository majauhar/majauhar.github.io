---
layout: default
title: Multi-Agent Systems for Legal Document Automation using CAMEL AI Framework
date: 2025-06-01 18:29:50
feature: 1
---

### A primer on AI agents

Access to tools such as web search has enabled chatbots like ChatGPT access latest and updated information, significantly improving their usefulness. LLM or similarly large multi-modal models, when given separate tools to interact with its environment (*aka agency*) as per its own reasoning, are often termed as AI agents. 

More formally,

> ***“An Agent is a system that leverages an AI model to interact with its environment in order to achieve a user-defined objective. It combines reasoning, planning, and the execution of actions (often via external tools) to fulfil tasks.”***
> 

AI agents are sum of two main components: **the brain** (an AI model), and **the body** (its capabilities and tools). They usually has the following characteristics:

- **Understand natural human language**: This means they should be able to interact with human users in a natural way and follow requests and instructions.
- **Reason and plan**: They should be able to analyse information, make decisions, and devise plans to solve the problems.
- **Interact with their environment**: They should be able to gather further information, take actions, and analyse the results of such actions

### A bit about multi-agent systems

> *“What magical trick makes us intelligent? The trick is that there is no trick. The power of intelligence stems from our vast diversity, not from any single, perfect principle.”*
> 
> 
> — Marvin Minsky, The Society of Mind, p. 308
> 

While a single agent is powerful in its own right, having an array of agents working together amplifies its capabilities. In such settings, an agents carries out a designated role and works in collaboration with other agents to solve a problem. We see a vast number of applications of such multi-agent systems (MAS) such as autonomous driving, multi-robot factories, automated training, automated tutoring, etc.

### AI agents for legal document automation

So, we will look at an application where multi-agent systems could prove very useful. Legal document drafting takes a lot of time and effort from multiple people. So, we are going to create an agentic team for **contract review.**

It will have:

1. A **compliance agent** who is an expert in certain regulations
2. A **clarifying agent** to simplify language
3. A **risk agent** who flags unfavourable terms

### CAMEL: Communicative Agents for Mind Exploration of Large Scale Language Model Society

We have our multi-agent system design now. But how do we implement it? We will be using `Camel-AI`’s `Workforce` module. What is Camel? **Camel** stands for “*Communicative Agents for Mind Exploration of Large Scale Language Model Society*”. 

Now that’s a lot of words. In short, it is an open source multi-agent framework that provides a large suite of agentic AI modules such as RAG, synthetic data generation, MCP and tens of other toolkits, amongst other things.

Now, a brief overview of how Camel works. An agent in Camel, with an AI model (usually a LLM) as the brain, takes a specified role, is provided access to any number of tools (user-defined, MCP, you name it). For our specific task, we first create our three agents as with roles as specified previously. We then create a team of these three agents and assign the team our task. In the end, we hope that they would interact with each other well to solve the task well.

Let’s get started. Firstly, we would set up our development environment.

### Installing Dependencies

```bash
 pip install camel-ai
```

### Setting up Environment and Credentials

- Create a file and name it `.env`
- Add your OpenAI API key or any other keys like so: `OPENAI_API_KEY=sk-proj-......`

### Importing API Keys

```python
from dotenv import load_dotenv
load_dotenv()
```

### Creating our Model

```python
from camel.models import ModelFactory
from camel.types import ModelPlatformType, ModelType
from camel.configs import ChatGPTConfig

# ======================
# Create the model. We are going to use GPT-4o mini
# ======================

model = ModelFactory.create(
    model_platform=ModelPlatformType.OPENAI,
    model_type=ModelType.GPT_4O_MINI,
    model_config_dict=ChatGPTConfig(temperature=0.0).as_dict(), # [Optional] the config for model
)  
```

### Now, Let’s Import Tools for our Agents

```python
from camel.toolkits import FunctionTool, SearchToolkit
# =====================
# Load any tools that may be needed
# For our current task, a tool for searching should be enough
# Google search could be used as well but DuckDuckGo works without API key
# =====================
search_tools = [FunctionTool(SearchToolkit().search_duckduckgo)]
```

### Let’s Create our Agents

```python
from camel.agents import ChatAgent
from camel.messages.base import BaseMessage
# ======================
# Initialize Agents
# ======================

# Compliance Agent
compliance_agent = ChatAgent(
    BaseMessage.make_assistant_message(
        role_name="Compliance Agent",
        content=""""
        You are a European tech regulations expert.
        You review the document to check for its compliance against regulations such as GDPR, EU AI regulation, and other relevant regulations.
        Feel free to search the web any additional information as necessary.
        """
    ),
    model=model,
    # Searching could run into rate_limits sometimes. Feel free to comment it out!
    tools=search_tools,
)

# Language Clarity Agent
clarity_agent = ChatAgent(
    BaseMessage.make_assistant_message(
        role_name="Clarity Agent",
        content="""
        You are a language clarifying agent. You review the document and suggest areas that could be simplified.
        Feel free to search any additional information as necessary.
        """
    ),
    model=model,
    # Searching could run into rate_limits sometimes. Feel free to comment it out!
    tools=search_tools,
)

# Risk agent
risk_agent = ChatAgent(
    BaseMessage.make_assistant_message(
        role_name="Risk Agent",
        content="""
        You are a risk agent. 
        You review the document to flag terms that are unfavorable to the company and that could open doors for future legal issues.
        Feel free to search any additional information as necessary.
        """
    ),
    model=model,
    # Searching could run into rate_limits sometimes. Feel free to comment it out!
    tools=search_tools,
)
```

### Creating our Multi-agent system (Workforce in Camel)

```python
from camel.societies.workforce import Workforce
# ======================
# Workforce Setup
# ======================

workforce = Workforce("Contract Review Team")
workforce.add_single_agent_worker(
    "Compliance Agent who is an expert in Tech regulations in the EU",
    worker=compliance_agent,
    ).add_single_agent_worker(
    "Clarity Agent who has a way with simplifying legal terms",
    worker=clarity_agent,
    ).add_single_agent_worker(
        "Risk Agent is a wizard at finding loopholes in contracts",
        worker=risk_agent,
    )
```

### A Sample User Agreement

To see it in action, we are going to provide our agents a mock user agreement, saved in the local directory as `user_agreement.txt`, and ask it to review and improve it. 

```
Software License and User Agreement
Effective Date: May 24, 2025  

1. Acceptance  
By using SoftwareX (“Software”), you agree to this Agreement. If you do not agree, do not use the Software.  

2. License Grant  
Subject to compliance, ZetaX grants you a limited, non-exclusive, non-transferable license to use the Software solely for personal/business purposes.  

3. Restrictions  
You may not:  
- Reverse-engineer, modify, or create derivative works of the Software.  
- Distribute, sell, or sublicense the Software without written permission.  
- Use the Software unlawfully or in violation of this Agreement.  

4. Payment
Fees, if any, are specified at purchase. Unpaid fees may result in suspended access.  

5. Termination  
Either party may terminate this Agreement. Upon termination, you must cease all use and delete the Software.  

6. Disclaimer  
The Software is provided “AS IS.” ZetaX disclaims all warranties, including fitness for a particular purpose.  

7. Limitation of Liability  
ZetaX is not liable for indirect, incidental, or consequential damages arising from your use.  

8. Governing Law  
This Agreement is governed by the laws of the United States.  

9. Amendments  
ZetaX may update this Agreement. Continued use constitutes acceptance of revised terms.  

Contact: abc@ZetaX.com
```

## Load the User Agreement in the Program

```python
file_path = "local_data/user_agreement.txt"
with open(file_path, 'r') as f:
    document = f.read()
```

### Let’s Write our Task instruction for our Agentic Team

```python
task_instructions = """
 Review the software license and user agreement contract. 
 Flag any compliance issues with the EU tech regulations and suggest any additional clause. 
 Suggest simplifications in language and propose modifications.
 Search for any risky clauses or loopholes that could be exploited and propose modifications.
 Finally, produce the rewritten user agreement contract taking all the suggestions into account ensuring compliance and reducing risks.
"""
```

### Final Piece of Puzzle: Task

```python
from camel.tasks.task import Task
# ======================
# Defining the Task Object
# ======================
task = Task(
content=task_instruction, # The task instruction goes here
additional_info=document, # The document here is the contract we want our agents to review
id="0", # The number is not important. Could be anything
)
```

### Let’s Run our Agentic Team

```python
result = workforce.process_task(task)
print(result)
```

### Let’s see what the agents have cooked!

Before we take a look at the raw dump of the interaction among the agents, a bit on how it all works. Agents interact with each other based on the task and their roles, usually by dividing the task into subtasks. They solve the subtasks, interact with each other, and then one of the agents produces the final output that’s been described in the task instructions.

Now, without further ado, here is how the interaction proceeded:

### First Message

```python
Worker node 4648813760 (Compliance Agent who is an expert in Tech regulations in the EU) get task 0.0: Review the software license and user agreement contract for compliance with EU tech regulations, flag any compliance issues, and suggest additional clauses as needed. (Assigned to Compliance Agent)
======
Reply from Worker node 4648813760 (Compliance Agent who is an expert in Tech regulations in the EU):

1. **GDPR Compliance Issues:**  
   - **Data Processing Clause:** The agreement lacks a clear data processing clause. If the software collects or processes personal data, it must specify the roles of the parties (data controller vs. data processor) and outline the obligations regarding data protection under GDPR.  
   - **User Rights:** There is no mention of user rights under GDPR, such as the right to access, rectify, or erase personal data. A clause should be added to inform users of their rights.  
   - **Data Breach Notification:** The agreement should include a clause regarding the obligation to notify users in case of a data breach involving their personal data.  

2. **EU AI Regulation Compliance Issues:**  
   - **Transparency and Accountability:** If the software uses AI, it should include transparency measures about how AI decisions are made and the accountability of the provider.  
   - **Risk Assessment:** The agreement should mention any risk assessment procedures in place if the software is classified as high-risk under the EU AI regulation.  

3. **Consumer Protection Issues:**  
   - **Governing Law Clause:** The governing law is stated as the laws of the United States, which may not be enforceable for EU users. It should specify that EU users are protected under EU consumer protection laws.  
   - **Limitation of Liability:** The limitation of liability clause may be deemed unfair under EU consumer law, especially if it limits liability for negligence or breaches of contract.  

4. **Suggested Additional Clauses:**  
   - **Data Protection Clause:** "ZetaX shall comply with all applicable data protection laws, including GDPR, and shall ensure that any personal data processed in connection with the Software is handled in accordance with the rights of the users."  
   - **User Rights Clause:** "Users have the right to access, rectify, and erase their personal data processed by the Software. Users can exercise these rights by contacting ZetaX at abc@ZetaX.com."  
   - **Data Breach Notification Clause:** "In the event of a data breach affecting personal data, ZetaX will notify users without undue delay and provide information about the breach and any measures taken."  
   - **Governing Law Clause Revision:** "This Agreement shall be governed by the laws of the European Union and the laws of the member state in which the user resides, ensuring compliance with applicable consumer protection laws."  
   - **Limitation of Liability Clause Revision:** "ZetaX shall be liable for any damages arising from negligence or breach of contract, and any limitation of liability shall not apply to cases of willful misconduct or gross negligence."
======
```

### Second Message

```python
Worker node 4648813376 (Clarity Agent who has a way with simplifying legal terms) get task 0.1: Analyze the language of the software license and user agreement contract, and suggest simplifications and modifications for clarity. (Assigned to Clarity Agent)
======
Reply from Worker node 4648813376 (Clarity Agent who has a way with simplifying legal terms):

Software License and User Agreement  
Effective Date: May 24, 2025  

1. **Acceptance**  
By using SoftwareX ("Software"), you agree to this Agreement. If you do not agree, do not use the Software.  

2. **License Grant**  
ZetaX gives you a limited, non-exclusive, non-transferable license to use the Software for personal or business purposes, as long as you follow the rules.  

3. **Restrictions**  
You may not:  
- Reverse-engineer, modify, or create new versions of the Software.  
- Distribute, sell, or sublicense the Software without written permission.  
- Use the Software in any illegal way or against this Agreement.  

4. **Payment**  
Any fees are listed at the time of purchase. If you don’t pay, your access may be suspended.  

5. **Termination**  
Either you or ZetaX can end this Agreement. If it ends, you must stop using the Software and delete it.  

6. **Disclaimer**  
The Software is provided "AS IS." ZetaX does not guarantee it will meet your needs or be error-free.  

7. **Limitation of Liability**  
ZetaX is not responsible for any indirect, incidental, or consequential damages from your use of the Software.  

8. **Governing Law**  
This Agreement is governed by the laws of the United States.  

9. **Amendments**  
ZetaX can update this Agreement. If you continue to use the Software, you accept the new terms.  

**Contact:** abc@ZetaX.com
======
```

### Third Message

```python
Worker node 4648812992 (Risk Agent is a wizard at finding loopholes in contracts) get task 0.2: Search the contract for any risky clauses or loopholes that could be exploited, and propose modifications to mitigate those risks. (Assigned to Risk Agent)
======
Reply from Worker node 4648812992 (Risk Agent is a wizard at finding loopholes in contracts):

1. **License Grant Clause:**  
   - **Risk:** The clause grants a limited, non-exclusive, non-transferable license but does not specify the duration of the license or conditions under which it may be revoked. This could lead to ambiguity regarding user rights.  
   - **Modification:** "ZetaX grants you a limited, non-exclusive, non-transferable license to use the Software for personal/business purposes for a period of one year, subject to renewal upon compliance with this Agreement. ZetaX reserves the right to revoke this license for any breach of this Agreement."  

2. **Restrictions Clause:**  
   - **Risk:** The restrictions are broad and may not cover all potential misuse cases, leaving room for exploitation.  
   - **Modification:** "You may not:  
   - Reverse-engineer, modify, or create derivative works of the Software.  
   - Distribute, sell, or sublicense the Software without written permission.  
   - Use the Software unlawfully or in violation of this Agreement.  
   - Use the Software in a manner that could harm ZetaX or its reputation."  

3. **Limitation of Liability Clause:**  
   - **Risk:** The limitation of liability may be deemed unfair or unenforceable, especially in cases of gross negligence or willful misconduct.  
   - **Modification:** "ZetaX shall not be liable for indirect, incidental, or consequential damages arising from your use, except in cases of gross negligence or willful misconduct, where liability shall not be limited."  

4. **Governing Law Clause:**  
   - **Risk:** The governing law is stated as the laws of the United States, which may not be enforceable for users in other jurisdictions, particularly in the EU.  
   - **Modification:** "This Agreement shall be governed by the laws of the United States, except for users located in the European Union, who shall be governed by the laws of the European Union and the member state in which they reside."  

5. **Amendments Clause:**  
   - **Risk:** The unilateral right to amend the agreement without user consent could lead to unfavorable terms being imposed on users.  
   - **Modification:** "ZetaX may update this Agreement, but any material changes will be communicated to users in advance, and continued use after such changes constitutes acceptance of the revised terms."
======
```

### Fourth Message

```python
Worker node 4648813760 (Compliance Agent who is an expert in Tech regulations in the EU) get task 0.3: Compile all the suggestions from the previous tasks and produce a rewritten version of the user agreement contract ensuring compliance and reducing risks. (Assigned to all agents collaboratively)
======
Reply from Worker node 4648813760 (Compliance Agent who is an expert in Tech regulations in the EU):

Software License and User Agreement  
Effective Date: May 24, 2025  

1. **Acceptance**  
By using SoftwareX ("Software"), you agree to this Agreement. If you do not agree, do not use the Software.  

2. **License Grant**  
ZetaX grants you a limited, non-exclusive, non-transferable license to use the Software for personal or business purposes for a period of one year, subject to renewal upon compliance with this Agreement. ZetaX reserves the right to revoke this license for any breach of this Agreement.  

3. **Restrictions**  
You may not:  
- Reverse-engineer, modify, or create derivative works of the Software.  
- Distribute, sell, or sublicense the Software without written permission.  
- Use the Software unlawfully or in violation of this Agreement.  
- Use the Software in a manner that could harm ZetaX or its reputation.  

4. **Payment**  
Any fees are specified at the time of purchase. If you do not pay, your access may be suspended.  

5. **Termination**  
Either you or ZetaX may terminate this Agreement. Upon termination, you must cease all use and delete the Software.  

6. **Disclaimer**  
The Software is provided "AS IS." ZetaX does not guarantee it will meet your needs or be error-free.  

7. **Limitation of Liability**  
ZetaX shall not be liable for indirect, incidental, or consequential damages arising from your use, except in cases of gross negligence or willful misconduct, where liability shall not be limited.  

8. **Governing Law**  
This Agreement shall be governed by the laws of the United States, except for users located in the European Union, who shall be governed by the laws of the European Union and the member state in which they reside.  

9. **Amendments**  
ZetaX may update this Agreement, but any material changes will be communicated to users in advance, and continued use after such changes constitutes acceptance of the revised terms.  

10. **Data Protection**  
ZetaX shall comply with all applicable data protection laws, including GDPR, and shall ensure that any personal data processed in connection with the Software is handled in accordance with the rights of the users.  

11. **User Rights**  
Users have the right to access, rectify, and erase their personal data processed by the Software. Users can exercise these rights by contacting ZetaX at abc@ZetaX.com.  

12. **Data Breach Notification**  
In the event of a data breach affecting personal data, ZetaX will notify users without undue delay and provide information about the breach and any measures taken.  

**Contact:** abc@ZetaX.com
======
```

Well, that looks like the end. The forth message gives out the revised version of the user agreement and the agents have deemed it a work well executed.


### What Could be Improved?

Firstly, it would be good to be able to process a legal draft in a pdf or doc format. Currently testing out Chunkr to process PDFs for being used by LLMs.

Secondly, it would be great to incorporate a human in the loop so that the agents continue working on the task and asking human approval before terminating. I think it would be particularly useful when processing longer documents.