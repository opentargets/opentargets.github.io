---
title: "Why clinical trials stop: the role of genetics"
date: 2024-07-29
image_filename: "clinical-trial-stop-reasons-Jul24.png"
image_alt_text: "Graphic showing predicted trial stop reasons in rows with counts of trials per start year, clinical phase or therapeutic area shown by the color in each cell. The outcome groupings of the stopped reasons are shown using the color next to the stopped reason label."
layout: press_release
---
<strong>Using machine learning to analyse the genetic factors behind early clinical trial termination, researchers find a link between genetic evidence and trial outcome.</strong>

<br/>

Failure is the most likely outcome of a clinical trial. Learning from these failures by understanding which factors maximise the chances of a successful trial would help improve the drug discovery process. However, accessing information about failed clinical trials is difficult since the drug discovery literature is biased towards publishing successful results.

A representative source of trial results are stopped trials, meaning clinical trials that were halted before their scheduled endpoint. Stopped trials listed on ClinicalTrials.gov must now provide a freeform text reason for the stoppage. This information is openly available and can be mined to learn which features make trials more likely to fail. This could inform future drug discovery initiatives.

In a study <a href="https://www.nature.com/articles/s41588-024-01854-z">published today in Nature Genetics</a>, researchers at Open Targets and EMBL’s European Bioinformatics Institute (EMBL-EBI) created a machine learning approach to analyse the free-text reasons explaining why 28,842 clinical trials stopped. They then evaluated the genetic evidence underpinning the target-disease relationships in these trials. Their analysis revealed that clinical trials that stopped for negative reasons – such as safety or efficacy concerns – were less supported by genetic evidence. In fact, the study indicates that genetic evidence halves the odds of early stoppage.

“The results of our analysis underscore the critical importance of integrating genetic evidence in drug development,” said Olesya Razuvayevskaya, Postdoctoral Research Fellow in Natural Language Processing at Open Targets. “This potentially reduces the high rates of trial failures, leading to more effective and safe therapies and laying the groundwork to de-risk future clinical studies.”

The model created for this work is available for download and interactive exploration, and up-to-date predictions for newer clinical studies are available through the <a href="http://platform.opentargets.org">Open Targets Platform</a>.

The team created a natural language processing model to classify the stop reasons into 17 categories. For each clinical trial, they used 13 sources of genetic evidence available in the Open Targets Platform to evaluate the strength of the association between the drug target and the disease indication. 

Overall, the analysis showed that stopped trials are more likely to fail due to early coincidental factors that aren’t necessarily linked to the strength of the evidence linking the drug target to the disease. For example, over a third of trials stop due to insufficient enrollment. For the 12.7% of trials that failed because of safety or efficacy reasons, the authors found a correlation with a lack of strong genetic evidence to link the target to the disease.

Almost half of the stopped trials the team looked at were cancer trials, and these were more likely to stop due to safety or side effects. The authors found several characteristics of the targets in those trials that correlated with safety issues: genetic constraint – a measure of how essential a gene is – multiple known physical interactors, and lack of tissue specificity. Analyses of these unfavourable factors could help preempt early termination due to safety or side effects, maximising the chances of a successful clinical trial. 

“Previous retrospective analyses from Open Targets found that drugs are more likely to be approved when the link between the disease and the drug target is supported by evidence from genetics and genomics studies,” said David Ochoa, Open Targets Platform Coordinator. “Together with this new research, genetic support is clearly both predictive of clinical trial progression and protective of early trial stoppage. This is strong support for Open Targets’ founding aim to use the information generated by genetic sequencing and genomics studies to systematically improve the selection of targets for drug development.”

<br/>

<b>Source article</b>
<br/>
Razuvayevskaya et al., <a href="https://www.nature.com/articles/s41588-024-01854-z">Genetic factors associated with reasons for clinical trial stoppage</a> (2024) <i>Nat Genet</i> 
DOI: 10.1038/s41588-024-01854-z