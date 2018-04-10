---
layout: bootstrap
title: Resouces
permalink: /resources/
---

# Publications
* [Interleukins and their signaling pathways in the Reactome biological pathway database](https://www.ncbi.nlm.nih.gov/pubmed/29378288) Jupe S et al. DOI:10.1016/j.jaci.2017.12.992
* [Designing an intuitive web application for drug discovery scientists](https://doi.org/10.1016/j.drudis.2018.01.032) Karamanis N et al. DOI:10.1016/j.drudis.2018.01.032
* [Unsupervised correction of gene-independent cell responses to CRISPR-Cas9 targeting](https://www.biorxiv.org/content/early/2017/12/03/228189) Iorio F et al. DOI:10.1101/228189 
* [Uncovering novel repositioning opportunities using the Open Targets platform](http://www.sciencedirect.com/science/article/pii/S1359644617301897) Khaladkar M et al. DOI:10.1016/j.drudis.2017.09.007
* [In silico prediction of novel therapeutic targets using gene–disease association data](https://translational-medicine.biomedcentral.com/articles/10.1186/s12967-017-1285-6) Ferrero E et al. DOI:10.1186/s12967-017-1285-6
* [Reactome enhanced pathway visualization](https://academic.oup.com/bioinformatics/article/doi/10.1093/bioinformatics/btx441/3930125/Reactome-enhanced-pathway-visualization) Sidiropoulos K et al. DOI:10.1093/bioinformatics/btx441
* [ProtVista: visualization of protein sequence annotations](https://academic.oup.com/bioinformatics/article-lookup/doi/10.1093/bioinformatics/btx120) Watkins X et al. DOI:10.1093/bioinformatics/btx120
* [Reactome pathway analysis: a high-performance in-memory approach](https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-017-1559-2) Fabregat A et al. DOI:10.1186/s12859-017-1559-2
* [The ChEMBL Database in 2017](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5210557/) Gaulton A et al. DOI:10.1093/nar/gkw1074
* [Open Targets: a platform for therapeutic target identification and validation](https://academic.oup.com/nar/article/45/D1/D985/2605745/Open-Targets-a-platform-for-therapeutic-target) Koscielny G et al. DOI:10.1093/nar/gkw1055
* [Transcription factor activities enhance markers of drug sensitivity in cancer](http://cancerres.aacrjournals.org/content/early/2017/12/09/0008-5472.CAN-17-1679) Garcia-Alonso L et al. DOI:10.1158/0008-5472.CAN-17-1679
* [Dissecting the genomic heterogeneity of cancer hallmarks' acquisition with SLAPenrich](http://www.biorxiv.org/content/early/2017/03/27/077701) Iorio F et al. DOI:10.1101/077701 
* [Literature Evidence in Open Targets – a target validation platform](https://jbiomedsem.biomedcentral.com/articles/10.1186/s13326-017-0131-3)  Kafkas S et al. DOI:10.1186/s13326-017-0131-3
* [TnT: A set of libraries for visualising trees and track-based annotations in the web](https://www.ncbi.nlm.nih.gov/pubmed/27153646) Pignatelli M DOI:10.1093/bioinformatics/btw210
* [Warped Matrix Factorisation](https://link.springer.com/chapter/10.1007%2F978-3-319-46227-1_49) Pratanwanich N et al. DOI:10.1007/978-3-319-46227-1_49
* [Linking rare and common disease: mapping clinical disease-phenotypes to ontologies in therapeutic target validation](https://jbiomedsem.biomedcentral.com/articles/10.1186/s13326-016-0051-7) Sarntivijai S et al. DOI:10.1186/s13326-016-0051-7
* [Using human genetics to make new medicines](http://europepmc.org/abstract/MED/26370900) Barrett JC et al.  DOI:10.1038/nrg3998

<br/>
<br/>

# [Open Targets Platform](http://www.targetvalidation.org/)
We have developed the [Open Targets Platform](http://www.targetvalidation.org/) to provide summaries of the evidence for the involvement of a specific gene with a selected disease.

<br/>
<br/>

# [LINK (LIterature coNcept Knowledgebase)](https://link.opentargets.io/)
A new tool called [LINK](https://link.opentargets.io/) (LIterature coNcept Knowledgebase) has been developed that allows the exploration of half a billion relations between genes, diseases, drugs and key concepts extracted from PubMed abstracts using NLP (Natural Language Processing).

Once MEDLINE relaxed their license for obtaining and analysing publication data last year, we started looking for novel ways to mine their data. We wanted to exploit the biomedical knowledge often buried in the literature to help scientists generate new hypotheses for the identification of new drug targets.
For this purpose, we have built Library, an open source ecosystem comprising:
* a pipeline that allows us to quickly run a large scale NLP analysis.
* an API that serves the resulting data.
* a user interface to explore this data.

Our pipeline annotates genes, diseases and drugs present in PubMed abstracts, and extracts key concepts. 

<br/>
<br/>

# [DoRothEA (Discriminant Regulon Expression Analysis)](http://dorothea.opentargets.io/#/)
[DoRothEA](http://dorothea.opentargets.io/#/) (Discriminant Regulon Expression Analysis) is a research resource that can be used to search candidate TF-drug interactions in cancer.

Due to their location as downstream effectors of signalling pathways, aberrant activities in upstream driver genes (even if not mutated) will cause altered TF activities, thus proposing TFs as sensors of pathway dysregulation and alternative markers. Here we study the role of 127 TFs in drug sensitivity across ~1,000 cancer cell lines screened with 265 anti-cancer compounds from the GDSC. In our first approach we studied how the TF activity pattern of an individual affects drug response and mined for single TF-drug statistical interactions. In our second approach we screened for TFs whose activity patterns complement or improve well-established genomic markers in the prediction of drug response.

Please see [Garcia-Alonso et al.](http://cancerres.aacrjournals.org/content/early/2017/12/09/0008-5472.CAN-17-1679) for an explanation of the approach.

<br/>
<br/>

# Open Targets Principles

Open Targets is guided by the following principles: 
*   We are focused on pre‐competitive research that will enable the systematic identification and prioritisation of targets
*   We are committed to rapid publication and making data, methods and results publically available as soon as possible
*   We believe in non‐exclusive partnerships that foster the free exchange of ideas and expertise
 
We place in the public domain all our new informatics tools, experimental methods, platforms and the data generated by our projects as soon as is practical. We do not plan to seek patent protection for IP arising from Open Targets. However, we recognise that instances may arise where this is appropriate to support our mission. Therefore, Open Targets has a Joint Patent Committee with scientific and legal experts from all of our partners that reviews all potential publications (but not raw data) prior to submission. 
 
In practice, this means:
*   For the development and execution of Open Targets Research Projects each Member has agreed to license its Background IP to the other members.
*   All Members have agreed to license Open Targets Arising IP to each other for use in Open Targets Research Projects and for the Members’ research and development activities.
*   Any IP that relates directly and solely to an Industry Partner Compound will belong to the Industry Partner.
*   Any other IP arising from an Open Targets Research Project will belong to the Member(s) that invented it.



