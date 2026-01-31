---
layout: default
title: "Forecasting Transformative AI"
date: 2025-10-01 18:29:50
feature: 1
---

The timing of transformative Al (TAI)[^1], is a central debate in Al safety and policy. Predicting the future is hard. It is made more complicated by ambiguous terms, scopes, and definitions. For example, what counts as "transformative" can range from achieving in-lab human-level intelligence to widespread economic and societal impact. An analogy is the Internet: ARPANET began in 1969, TCP/IP was invented in 1974 (and standardized by 1983), and the World Wide Web appeared in 1990. However, the Internet's true social impact (email, web browsers, e-commerce, etc.) only emerged in the mid-to-late 1990s. Similarly, Al might reach key technical milestones years before their effects are truly felt in society.

The terms used for advanced Al vary (AGI, ASI, superintelligence, "full automation of labor," HLMI/"high-level machine intelligence," etc.), and small differences in wording can lead to significant differences in timeline estimates. For instance, Al Impacts defines HLMI as when
"unaided machines can accomplish every task better and more cheaply than human workers"[1]. This is essentially a human-level Al benchmark. Yet, even among experts, the predicted date for HLMI often moves earlier as Al advances (the 2023 Al Impacts survey placed a 50% chance of HLMI by 2047, earlier than previous surveys). As with the Internet, technical capability often precedes widespread transformation. One might call Al "transformative" when it actually causes major societal shifts, not just when a lab prototype exists. Nonetheless, forecasts typically focus on milestones like AGI/HLMI as proxies for potential impact.
Forecasting methods fall into two broad categories: 

1. consensus-based forecasts, and 
2. mechanism-based forecasts. 

Consensus-based approaches aggregate human judgments (surveys of experts, public opinion polls, prediction markets, etc.). Mechanism-based approaches build explicit models or analogies (e.g. scaling laws, biological anchors, or historical analogies) to derive timelines. We now discuss both categories and their predictions in the following sections.

## Consensus-based predictions

Consensus forecasts rely on opinions from experts or the public. These include expert surveys, polls of common people, prediction markets, and superforecasting tournaments.

Results vary by group:

- **Al Expert Surveys.** Researchers who have published at top-tier Al conferences are usually considered Al experts. Predictions by them are collected using surveys. Largest recent surveys of Al researchers have come from Al Impacts (2020-2023). The 2023 Al Impacts survey (2,778 researchers) found that experts gave a 10% chance of HLMI by 2027 and 50% by 2047. These forecasts shifted much earlier from just one year before: the 2022 survey gave 10% by 2029 and 50% by 2060. In other words, as Al advanced rapidly, expert predictions moved up by over a decade. For comparison, earlier surveys (2018-2019) using similar benchmarks had 50% forecasts in the 2060s. This trend underscores how fast developments like GPT-4 have prompted experts to revise timelines downward" [2].
- **Public Opinion Surveys.** Surveys of the general public in advanced countries show varying timelines. In the US, the Sentience Institute's 2023 AIMS survey [3] (1,099 US adults) found very short medians: 2 years for AGI (~2025), 5 years for human-level Al (~2028), and 5 years for ASI (~2028). (Here AGI/HLAI refers broadly to human-level systems, while *ASI* means far beyond human level.) In the UK, a 2023 Public First [4] poll reported a median expected arrival of AGI between 2030-2039. These public polls suggest common people tend to expect human-like Al within the next one to two decades. The CHI 2025 AIMS survey paper (that combined the surveys from 2021 and 2023) reported that U.S. respondents now put sentient Al (a slightly different concept) at a median of 5 years away.
- **Prediction Markets.** Platforms like Metaculus or Polymarket collect bets on Al timelines. For example, as of September 2025 Metaculus's community median forecast put a 50% chance of AGI by 2033 [5] which is a decade earlier than it predicted a year prior. Polymarket has also hosted questions on Al, though results vary over time. In general, these market-based forecasts have also been moving earlier as Al has progressed. (The details of markets are less transparent than surveys, but they often align roughly with expert surveys, and in early 2024 Metaculus's aggregated prediction was earlier than its own forecasts a year before.)
- **Superforecasters and Tournaments.** "Superforecasters" are people with a track record of accurate predictions (often identified via forecasting tournaments). The 2022 X-risk Persuasion Tournament (XPT) [6] involved 89 forecasters on Al-related questions. In its final round, the median superforecaster forecast gave only a 1% chance of AGI by 2030, 21% by 2050, and 75% by 2100. These probabilities are more pessismistic (later) than many expert surveys. For comparison, in the same XPT, the domain expert group predicted ~9% by 2030 and ~46% by 2050, close to the AI Impacts results.
- **Individual Experts.** Leading Al researchers and tech CEOs have publicly given quick timelines. For instance, Yoshua Bengio [7] (Turing Award co-winner) said in 2023 that Al outperforming humans in all tasks might happen in "5-20 years". Geoffrey Hinton (also Turing laureate) independently gave a similar 5-20 year estimate. Eliezer Yudkowsky (Al researcher and writer) noted in 2023 on a podcast that "it could be three years. It could be 15 years... I'm not really seeing 50 [years]" [8] unless civilization collapses. Rob Bensinger (researcher at Open Philanthropy) wrote in 2023 that "STEM-level AGI" timelines "don't look that long (e.g., probably not 50 or 150 years; could well be 5 years or 15)” [9].
- **Model-based Forecasting.** This is a recent development in forecasting where instead of human surveys, forecasting models are themselves queried. Epoch and GovAl did some work in 2024-25 that involved eliciting timeline from advanced LLMs and calibrating their predictions against historical data.

Among industry leaders, Sam Altman (OpenAl CEO) commented in 2023 that AGI might be achieved in "4 or 5 years"[10] (around 2027-2028). In early 2025 he even said AGI could arrive "during [Trump's] term" (i.e. by 2028). Dario Amodei (Anthropic CEO) has forecast that Al systems could surpass "almost all humans at almost everything" within two to three years (and implied ~50% chance of human-level intelligence in that period) [11]. Jensen Huang (Nvidia CEO) predicted in 2024 that AGI, defined roughly as Al that can pass all human exams, could emerge in about five years [12]. These individual forecasts (5-15 year horizons) are broadly in line with shorter timelines in expert surveys and superforecasting tournaments, though opinions differ.

## Mechanism-based predictions

Mechanism-based approaches derive timelines from assumed growth patterns or analogies. Many rely on the scaling hypothesis [13], which posits that Al capabilities grow predictably with more compute and data. The key idea (from Kaplan et al., 2020 and related work) is that neural network performance follows power-law "scaling laws" as models, data, and compute increase. In practice, as models like OpenAl's GPT series have grown, their capabilities have indeed improved smoothly with scale. Some experts assume these trends will continue. For example, architectures or training methods that increase test-time compute (like chain-of-thought reasoning during inference) can unlock additional capabilities even without retraining. Ongoing research (2023-2024) continues to refine scaling laws (e.g. DeepMind's "Chinchilla" scaling and analyses of its limits). One recent preprint by Epoch Al (April 2024) attempted to replicate Chinchilla's results and found some deviations, suggesting that predicting through scaling laws remains an active area of study. There are also works that claims emergent capabilities as an outcome of scaling. However, some other works argue that they are just a remnant of evaluation metric choices.

Under the scaling view, specific models like Bio Anchors and the Direct Approach have been proposed:

- **Biological Anchors.** Introduced by Ajeya Cotra (2020) [14,15] for Open Philanthropy, this method anchors Al timelines to biological facts. It assumes an Al needs roughly human-brain-level computation to achieve human-like intelligence, then models when that compute becomes affordable. Cotra's framework uses four "anchors": the compute equivalent of (a) the human brain's inference, (b) human genome size, (c) a child's lifetime learning (to adulthood), and (d) the entire course of human evolution. Aggregating these, her report estimated a ~10% chance of transformative A/ by 2031, 50% by 2052, and ~80% by 2100. These forecasts assume current trends in hardware and algorithms continue, but note substantial uncertainty.
- **Direct Approach.** Proposed by Epoch Al (2023) [16], this method takes a more straightforward scaling tack. It asks if a machine can match human performance on all tasks (as in a perfect Turing Test), then it is effectively human-level Al. The model assumes continued progress in model size and training. Using current compute costs and efficiency trends, the Direct Approach estimated a 10% probability of achieving transformative Al by 2025, 50% by 2052, and 78% by 2100. In other words, under a strong scaling hypothesis, a human-like Al might arrive in the late 2020s to early
- **Mechanistic Al Capability.** This approach, proposed in the Al 2027 report, is similar to the Direct Approach in that it also looks at the current development trends and extrapolates the time required to scale the capability gaps that exist. The difference lies in the scaling of task complexity over time (instead of purely computation) and capability improvement as measured by benchmarks (similar to direct approach). Both these methodologies are termed "time-horizon-extension" model and "benchmarks-and-gaps" model, respectively. The report predicts [17] the development of HLAI in various domains (superhuman coders, superhuman Al researcher, superhuman remote worker) by 2027, leading to ASI by the end of 2027.
- **Hybrid Approaches.** These are a recent development in prediction market forecasting platforms where mechanistic scaling models are directly integrated into crowd predictions, creating a hybrid system that weighs both human judgement and empirical scaling laws.

These mechanism-based models rely on assumptions about compute growth, efficiency, and the sufficiency of current architectures. For example, they assume no major algorithmic breakthroughs beyond scaling, and that one can build brain-scale models in single runs. Some people claim that these assumptions may be optimistic or incomplete, but proponents argue they provide concrete forecasts rooted in measurable trends.

Let's look at the compilation of predictions in the following table. 

|Source (year)                                |Type                                     |Sample / N                                  |Definition / Question                                                      |Predicted Timeline                                     |
|---------------------------------------------|-----------------------------------------|--------------------------------------------|---------------------------------------------------------------------------|-------------------------------------------------------|
|AI Impacts – Expert Survey (2023)            |Expert survey                            |2,778 researchers                           |HLMI: unaided machines can accomplish every task better/cheaper than humans|10% by 2027; 50% by 2047                               |
|Metaculus (Dec 2024 aggregate)               |Prediction-market / community aggregation|~1000+ forecasts                            |Metaculus AGI definition (community aggregation)                           |25% by 2027; 50% by 2031                               |
|Sentience Institute – AIMS (2023)            |Public opinion (US)                      |1,169 adults                                |Public perceptions of AGI, HLAI, ASI                                       |Median: AGI ~ 2025; HLAI ~ 2028; ASI ~ 2028            |
|Public First (UK poll, 2023)                 |Public opinion (UK)                      |Nat. poll                                   |Public expectations of AGI                                                 |Median arrival: 2030–2039                              |
|Existential Risk Persuasion Tournament (2022)|Superforecasters                         |32, 28, 27 (for 2030, 2050, and 2100, resp.)|Tournament AGI-related questions                                           |Superforecasters: 1% by 2030; 21% by 2050; 75% by 2100 |
|Existential Risk Persuasion Tournament (2022)|Experts                                  |5                                           |Tournament AGI-related questions                                           |Experts: 9% by 2030; 46% by 2050; 87% by 2100          |
|Biological Anchors – Ajeya Cotra (2020)      |Mechanism-based                          |N/A (model)                                 |Brain, genome, child learning, evolution compute anchors                   |10% by 2031; 50% by 2052; 78% by 2100                  |
|Direct Approach – Epoch AI (2023)            |Mechanism-based                          |N/A (model)                                 |Extrapolated scaling laws (loss extrapolation)                             |10% by 2025; 50% by 2033                               |
|Yoshua Bengio (2023–2025)                    |Individual expert                        |—                                           |HLAI (Public remarks)                                                      |Estimated: HLAI plausible in 5–20 years                |
|Geoffrey Hinton (2023–2025)                  |Individual expert                        |—                                           |AGI (Public remarks)                                                       |Estimated: HLAI within 5–20 years                      |
|Sam Altman (2023–2025)                       |Industry leader (OpenAI CEO)             |—                                           |AGI (Public remarks)                                                       |AGI possible in 4–5 years (2027–2028)                  |
|Dario Amodei (2024–2025)                     |Industry leader (Anthropic CEO)          |—                                           |HLAI (Public remarks)                                                      |AI could surpass almost all humans in 2–3 years        |
|Jensen Huang (2024)                          |Industry leader (NVIDIA CEO)             |—                                           |‘Fairly competitive’ with humans (Public remarks)                          |AI could pass many human tests in ~5 years             |
|Eliezer Yudkowsky (2023)                     |AI safety and x-risk expert              |—                                           |AGI                                                                        |Suggests 3-16 years as plausible, 50 as implausible    |
|Rob Bensinger (2023)                         |AI safety and x-risk expert              |—                                           |‘STEM-level’ AGI	                                                          |Suggests 5-15 years as plausible, 50-150 as implausible|


## Limitations in Al Forecasting

Predicting the arrival of advanced Al is a notoriously difficult endeavour. The methodologies employed are subject to several well-documented challenges and cognitive biases that can significantly impact their reliability. Understanding these limitations is crucial for interpreting any Al timeline forecast.

### Framing Effects

Like many other expert elicitations, surveys about Al timelines and risks exhibit the "framing effects" [18] where the specific wording and framing of a question can drastically alter responses. This reduces the reliability and comparability of such surveys. For example, in a survey [19] of Al researchers, the framing of the key milestone as the arrival of "High-level machine intelligence (HLMI)" versus "full automation of labour (FAOL)" resulted in a median forecast difference of nearly 60 years. HLMI is an abstract, technical concept, whereas FAOL is a more concrete socio-economic outcome that participants may find easier to reason about, leading to vastly different anchors for their predictions. This demonstrates how subtle changes in terminology can access different cognitive frameworks and lead to divergent forecasts, even from the same group of experts.

### Information Cascades

Forecasts and opinions about Al do not form in a vacuum. The predictions from one group can influence another in a feedback loop, a phenomenon known as an "information cascade." For instance, a published survey of Al experts may anchor the predictions of a forecasting community like Metaculus. The resulting trend on Metaculus might then influence public opinion or the beliefs of policymakers, which in turn could affect funding and research directions. Such cascades suggest that different sources of predictions are often not statistically independent. This creates a risk of correlated errors, where a single flawed assumption or initial estimate can become widely propagated, creating a false sense of consensus or a "herding effect" [20]. It results in anchoring the community's expectations to a potentially narrow set of initial assumptions that are then reinforced rather than critically examined. Disentangling these influences and appropriately weighting different predictions is not straightforward and warrants significant caution.

### Emulating Biology and "Bio-Anchors"

History has shown that technological progress does not always successfully emulate biology. We built airplanes with fixed wings and propellers, not by mechanically replicating the flapping wings of a bird. This principle, often referred to as Moravec's paradox, suggests that the hard problems for humans are easy for Al, and vice versa. Hence, assuming that the path to Artificial General Intelligence (AGI) must involve reverse-engineering or closely mimicking the human brain may be a flawed premise. This approach to forecasting, which uses the human brain as a reference point (a "bio-anchor"), faces two major hurdles. 

First, similar to the aviation example, the most efficient engineering solution is often fundamentally different from the biological one. The path to machine intelligence may follow principles entirely alien to neurobiology. Second, our understanding of how the brain produces intelligence, consciousness, and general reasoning is still remarkably incomplete. This makes any prediction grounded in computational equivalents of the brain's processing power or architecture highly speculative. As a result, predictions grounded in "biological anchors," may be less robust than they appear. Yudkowsky's critique highlights that biological anchors implicitly assume human-like efficiency in cognition, despite the possibility that machine intelligence may develop along radically different trajectories.

### Scaling Laws and Discontinuous Gains

Many contemporary, mechanism-based forecasts rely heavily on the "scaling hypothesis." This is the empirically observed phenomenon [21] that as we increase the compute, data, and parameters of certain Al models, their performance improves in a predictable, continuous manner. These forecasts often extrapolate these smooth trends into the future.

However, the assumption that capabilities will continue to improve smoothly is not guaranteed. While performance metrics like "loss" may decrease predictably, the resulting qualitative behaviors of the models can change abruptly. Researchers have noted the appearance of "emergent abilities" [22] in large language models capabilities that are absent in smaller models but appear suddenly once a certain scale threshold is crossed. This creates a paradox: a continuous, predictable scaling process can lead to discontinuous and surprising jumps in what an Al system can actually do. Therefore, even if scaling laws hold, they may not protect us from sudden advances that current extrapolations fail to predict.

## References

[1] https://aiimpacts.org/wp-content/uploads/2023/04/Thousands_of_AI_authors_on_the_future_of_AI.pdf

[2] https://www.lesswrong.com/posts/ddj5HtnCHHMQGiQEM/timelines-to-transformative-ai-an-investigation#Figure_1__Comparison_of_median_predictions_for_the_arrival_of_AGI__by_group___XPT_final_round

[3] https://www.sentienceinstitute.org/aims-survey-supplement-2023

[4] https://publicfirst.co.uk/ai-us/

[5] https://www.metaculus.com/questions/5121/date-of-general-ai/

[6] https://static1.squarespace.com/static/635693acf15a3e2a14a56a4a/t/64f0a7838ccbf43b6b5ee40c/1693493128111/XPT.pdf

[7] https://time.com/collection/time100-ai/6310612/yoshua-bengio/

[8] https://intelligence.org/2023/03/14/yudkowsky-on-agi-risk-on-the-bankless-podcast/#:~:text=It%20could%20be%20three%20years,to%20be%20clear%2C%20whatever%20civilization

[9] https://intelligence.org/2023/04/21/the-basic-reasons-i-expect-agi-ruin/#:~:text=5.%20STEM,be%205%20years%20or%2015

[10] https://time.com/7205596/sam-altman-superintelligence-agi/

[11] https://www.marketingaiinstitute.com/blog/ai-predictions

[12] https://www.reuters.com/technology/nvidia-ceo-says-ai-could-pass-human-tests-five-years-2024-03-01

[13] https://gwern.net/scaling-hypothesis#scaling-hypothesis

[14] https://drive.google.com/drive/u/0/folders/15ArhEPZSTYU8f012bs6ehPS6-xmhtBPP

[15] https://www.astralcodexten.com/p/biological-anchors-a-trick-that-might

[16] https://www.lesswrong.com/posts/hqDfsYTftQGr4eM4H/now-this-is-forecasting-understanding-epoch-s-direct

[17] https://ai-2027.com/summary

[18] https://www.jstor.org/stable/1685855

[19] https://arxiv.org/abs/1705.08807

[20] https://books.google.co.in/books?id=JpEHswEACAAJ&client=fResults&source=gbs_book_other_versions_r&cad=2

[21] https://arxiv.org/abs/2001.08361

[22] https://arxiv.org/abs/2206.07682

[^1]: Often synonymised with terms including artificial general intelligence (AGI), artificial super intelligence (ASI), human-level machine intelligence (HLMI), full automation of labour (FAOL), etc.