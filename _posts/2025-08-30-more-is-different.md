---
layout: default
title: "More is Different: The Promise of Multi-Agent AI Systems"
date: 2025-08-24 18:29:50
feature: 1
---

> ***The sum of the parts is both more than, and different from, the parts themselves.***
> 

In his famous essay *More Is Different* (1972), physicist *Philip W. Anderson* argued that complexity and scale give rise to entirely new properties that cannot be extrapolated from the behavior of individual components [Anderson, 1972]. This perspective is reflected across disciplines. Is chemistry just applied physics? Is molecular biology merely applied single-cell biology? Is computer science or machine learning simply applied mathematics? Clearly, they are not. While many fields build upon one another, Anderson emphasized that at each new stage, new laws, concepts, and generalizations become necessary.

Language models have evolved rapidly in recent years. Early approaches relied on relatively simple n-gram statistical models, followed by recurrent neural networks (RNNs). The advent of transformer architectures (Vaswani et al., 2017) marked a turning point. Transformers offered two key advantages: they were highly parallelizable, allowing effective use of hardware accelerators and faster training, and they incorporated the attention mechanism, enabling much better modeling of long-range dependencies compared with RNNs or CNNs. These breakthroughs made it feasible to train models on vastly larger datasets and with more complex architectures.

This shift sparked an explosion in scale, producing what are now called large language models (LLMs). The first GPT model (GPT-1) contained about **117 million** parameters [Radford et al., 2018]. GPT-2 expanded to **1.5 billion** [Radford et al., 2019], and GPT-3 to **175 billion** [Brown et al., 2020]. Google’s PaLM went further, with **540 billion** parameters [Chowdhery et al., 2022]. While some of the later models use sparse architectures, meaning not all parameters are active at once, the trajectory of growth is clear.

Scaling in terms of model size and pre-training data has been studied extensively, and heuristic “*scaling laws*” have emerged (Kaplan et al., 2020). Beyond scaling laws, however, the debate has centered on so-called **emergent capabilities**. Researchers observed that certain abilities such as solving multi-step problems or generalizing across modalities appear suddenly at specific scales, akin to a phase transition. This observation echoes Anderson’s ideas on how complexity gives rise to qualitatively new behaviors. However, this interpretation has been challenged. Schaeffer et al. (2023) argue that emergent capabilities may be an artifact of evaluation metrics. For instance, discontinuous metrics, like multiple-choice accuracy, where answers are scored as wholly right or wrong, can produce the appearance of abrupt jumps in capability. When smoother metrics such as token-level edit distance or probabilistic scoring are used instead, performance improvements look continuous, not sudden [Schaeffer et al., 2023]. Follow-up studies suggest the truth may be more nuanced: some abilities do still exhibit emergent-like patterns under continuous measures [Wei et al., 2022].

This raises a deeper question: how should we measure “intelligence”? When comparing across the animal kingdom, intelligence itself remains difficult to quantify. Is it continuous, or does it manifest as step changes? I cannot claim to know the answer. But I believe grappling with these questions will help us develop better evaluation metrics for LLMs and clarify whether emergent capabilities truly exist.

Beyond LLMs themselves, AI agents built around LLM cores are now a hot area of research. By integrating tool-use, memory, and external APIs, they address many limitations of standalone models. Indeed, most popular chat interfaces already incorporate some degree of tool-calling. **Multi-agent AI systems**, in particular, are touted as a promising next step. Classical studies of multi-agent systems have shown the emergence of complex behaviors: coordination, negotiation, even new communication protocols (Shoham & Leyton-Brown, 2009). A while ago, there was a viral video where the demonstrators claimed that AI agents switched to a more efficient communication protocol (which they dubbed as *Gibberlink*) once they realised that they were talking to an AI. With powerful LLM cores, it is plausible that new forms of collective intelligence will arise behaviors distinct from what single LLMs display.

How this will play out remains an open question. Could we witness a genuine “phase transition” in AI systems when multiple agents interact? Will the sum of the parts truly be more than, and different from, the parts themselves? I have been thinking about this for quite some time and trying to find the answers. But for now, I could say that time will tell.

## **References**
- Anderson, P. W. (1972). More is Different. Science, 177(4047), 393–396.
- Vaswani, A., et al. (2017). Attention Is All You Need. NeurIPS.
- Radford, A., et al. (2018). Improving Language Understanding by Generative Pre-Training.
- Radford, A., et al. (2019). Language Models are Unsupervised Multitask Learners.
- Brown, T., et al. (2020). Language Models are Few-Shot Learners. NeurIPS.
- Chowdhery, A., et al. (2022). PaLM: Scaling Language Models with Pathways.
- Kaplan, J., et al. (2020). Scaling Laws for Neural Language Models.
- Schaeffer, R., et al. (2023). Are Emergent Abilities of Large Language Models a Mirage?
- Wei, J., et al. (2022). Emergent Abilities of Large Language Models.
- Shoham, Y., & Leyton-Brown, K. (2009). Multiagent Systems: Algorithmic, Game-Theoretic, and Logical Foundations.
- ElevanLabs (2025). What happens when two AI voice assistants have a conversation?
