---
name: Tellia
status: thesis
category: Food and agriculture
subsector: Agriculture, voice AI
aiNative: true
hq:
  city: Paris
  country: France
  lat: 48.8566
  lon: 2.3522
  note: Also San Francisco, US
founded: 2024
offering: Voice-first AI assistant that turns field teams' calls, texts and voice notes into structured farm records.
website: https://tellia.com
round:
  label: $5M pre-seed
  eurM: 4.3
  date: September 2026
  lead: Revent
investors: [Revent, Grey Silo Ventures, Jeriko, Fund F]
scores:
  team: 3.0
  insight: 4.0
  product: 2.5
  evidence: 3.5
  market: 3.0
  model: 3.0
verdict: Invest, conditional
verdictLine: Sharp insight and early adoption, but moat and revenue are unproven and farm software has a modest exit ceiling.
caseSummary:
  insight: In agriculture the data problem is capture, not analysis. Field workers will not use forms or apps, but they already talk, call and WhatsApp, so a voice interface removes the barrier that has kept most growers off farm software.
  scale: If Tellia becomes the way field data enters agriculture, it becomes the front door and data layer for farm software, with room to expand into agronomic advice and an API that other agritech companies embed.
  team: Voice AI is now good enough for noisy, multilingual field conditions and the company already has reference deployments on two continents. Whether this team can turn that into a defensible business is the open question.
keyFacts:
  - { label: Round, value: "$5M pre-seed (about 4.3M euros), led by Revent", tag: R }
  - { label: Usage, value: "80%+ daily active use within two months of onboarding", tag: C }
  - { label: Reach, value: "Live across 400,000 hectares in the US and Europe", tag: C }
  - { label: Named customers, value: "Campos Brothers Farms, Duckhorn, IFV, Val de Gascogne, KWS Saat", tag: R }
  - { label: Team, value: "13 people, San Francisco and Paris", tag: R }
  - { label: Revenue and pricing, value: "Not disclosed" }
topRisks:
  - Incumbents or voice platforms add the same feature, leaving Tellia as a feature rather than a company.
  - Willingness to pay is unproven; revenue is not disclosed and pilots may not convert to large contracts.
  - Wrong agronomic or spray advice could erode trust in a high-stakes season.
mustBeTrue:
  - Daily use of 80%+ holds across customers and survives beyond onboarding.
  - Customers pay a price that supports a business, roughly tens of dollars per user per month or a few dollars per hectare.
  - The data and integration layer creates switching costs, evidenced by partner platforms embedding the API.
  - Accuracy on field vocabulary and noise is clearly better than general voice tools.
  - The company can expand beyond records into higher-value services.
updated: 2026-10-02
analysisDate: 2 October 2026
---

> Desk research only. No access to founders, customers, financials or the cap table. Conclusions are hypotheses with stated confidence. Not investment advice.

## 1. Snapshot

Tellia is a voice-first AI assistant for farm and field teams. Workers call, text, WhatsApp or send voice notes and photos, and the system turns them into structured records tied to the right field, crop and crew (scouting notes, spray records, irrigation logs, tasks). It targets the large share of growers who run no farm software at all, and says its next step is an "agentic layer" that pushes the captured data into other agritech tools.

| Item | Detail | Source / tag |
|---|---|---|
| Website | tellia.com | [V] [company site](https://tellia.com/) |
| Founders | Coline Labadie de Faÿ (CEO), Vincent Trastour (CTO) | [R] [AgNavigator](https://www.agnavigator.com/Article/2026/09/10/tellia-raises-5m-to-make-farm-data-capture-as-easy-as-a-phone-call/), [Vestbee](https://www.vestbee.com/insights/articles/tellia-lands-5-m) |
| Team size | 13 people across US and Europe | [R] [iGrow News](https://igrownews.com/tellia-latest-news/) (single source) |
| Round | $5M pre-seed, led by Revent; Grey Silo Ventures, Jeriko, Fund F | [R] multiple outlets |
| Total raised | Not disclosed beyond this round | n/a |
| Named customers (US) | Campos Brothers Farms (almonds), Duckhorn wineries | [R] |
| Named customers (Europe) | IFV (French wine and vine institute), Val de Gascogne cooperative, KWS Saat (German plant breeder) | [R] |
| Other testimonials on site | Operators in Ecuador, France, California | [C] company site |
| Pricing and revenue | Not disclosed | n/a |

## 2. The investment case in three sentences
1. **Insight:** In agriculture the data problem is capture, not analysis. Field workers will not use forms or apps, but they already talk, call and WhatsApp, so an interface that meets them there removes the barrier that has kept most growers off farm software.
2. **Why it can be large:** If Tellia becomes the way field data enters agriculture, it becomes the front door and data layer for farm software, with possible expansion into agronomic advice and an API that other agritech companies embed.
3. **Why this team, now:** Voice AI quality has just become good enough for noisy, multilingual field conditions, and the team already has paying-looking deployments in two continents; whether this team can turn that into a defensible business is the open question (see section 5).

## 3. Business and problem
- **Problem.** Field teams spend their days outdoors and their evenings at a keyboard, in the CEO's words **[C]**. Records needed for compliance, labour, spraying and trials are captured late, partially or on paper. The CEO says most growers, including very large ones, still run no farm management software **[C]**.
- **Who feels it.** Specialty-crop growers (vineyards, orchards, vegetables), cooperatives, seed and breeding companies running trials, and agronomy advisers. Labour is 40 to 60% of specialty-crop production cost per one industry source **[R]**, so time saved on records has a measurable value.
- **Buyer versus user.** The buyer is likely the farm operations head or agronomy director; the users are crews and agronomists. Daily use by the crews is what makes the data valuable.
- **Existing alternatives.** Paper and spreadsheets; farm management software (Croptracker, Granular, Climate FieldView, Trimble Ag); scouting apps with voice notes (AskMyFarm, VitiScribe, FarmQA). Most require typing or screen navigation.
- **Business model.** Not disclosed. Likely subscription per user, per hectare or per farm, with possible API or partner revenue later. **[E]**
- **Why now.** Speech recognition and language models now handle noise, accents and code-switching (the company cites mixed Spanish and English) **[C]**; labour shortages and compliance pressure (spray records, labour programmes, sustainability reporting) raise the value of good records.

## 4. Product and technology
- **What exists.** A live product in production at several customers in the US and Europe **[R]**. Channels: phone call, SMS, WhatsApp, voice note, email, photo. Features on the site **[C]**: automatic structuring into records, a shared searchable workspace, field mapping (import or draw boundaries), PDF and Word report generation, agronomic Q&A (pest thresholds, spray timing, irrigation), task and reminder management, multilingual support.
- **Roadmap.** An "agentic layer" connecting to existing agritech products by API, plus further voice AI development **[R]**.
- **Moat assessment (my view).**
  - *Weak:* the underlying speech and language models are largely available to everyone. A well-resourced farm software vendor could add a voice feature.
  - *Potentially stronger:* (a) domain-tuned structuring of messy field speech into correct records; (b) proprietary agronomic and operational data accumulating per customer; (c) workflow embedding and switching costs once a team's records live in Tellia; (d) distribution through cooperatives, institutes and partner platforms; (e) multilingual coverage.
  - Honest test: a competitor with similar funding could probably match the basic voice capture in months. Defensibility therefore depends on data, integrations and distribution, none of which can be assessed from public sources yet. **Tech defensibility: unproven.**
- **Technical risk.** Moderate. Accuracy on technical terms, field names and noisy audio; hallucination risk in the agronomic Q&A, which could give wrong spray or pest guidance; data privacy and ownership terms (company says farm data is never shared with third parties **[C]**).
- **Claims to verify.** The 80% daily-active-use figure (definition, sample, measured on whom); accuracy benchmarks; how the "agronomic Q&A" is grounded and who is liable for advice.

## 5. Founders and team
| Name | Role | Background | Verified? |
|---|---|---|---|
| Coline Labadie de Faÿ | CEO, co-founder | MSc Management (Entrepreneurship), ESSEC, 2020; VC analyst at Angel Ventures (2018); finance role at Publicis Groupe (2019); COO at ARIONEO (listed 2019 to 2025), a French equine-sensor company; Founder in Residence at Entrepreneur First | Partly. Based on search snippets of LinkedIn and Crunchbase [R]; not checked against primary records |
| Vincent Trastour | CTO, co-founder | Computer science at EPITECH (2011 to 2016) with a period at Chung-Ang University; founded Flamingo Filter, an AR studio (2019), now part of Busterwood studio | Partly. Exit terms not found. "Exit" is my inference from the studio now belonging to another company, not a verified outcome [E] |

- **How they met.** Through Entrepreneur First, a talent-investor programme that pairs individual founders. Neither founder has a stated agriculture background in the sources found.
- **Founder-market fit.** Moderate. The CEO has experience bringing a hardware-and-data product to an unglamorous, relationship-driven industry (equine). The CTO has built and sold a creative-tech business. Neither has a disclosed farming or agronomy background. The product has nonetheless landed reference customers in two regions, which partly substitutes for domain credentials.
- **Gaps and key hires.** A senior agronomy or ag-industry commercial leader; enterprise sales for cooperatives and seed companies; a head of ML or speech who can own accuracy.
- **Items to check.** The CEO's listed ARIONEO tenure runs to 2025 while Tellia was founded in 2024; clarify the timeline and whether the role overlapped. Confirm equity split and who holds technical IP.
- **Red flags found.** None conclusive. The above is a verification item, not a finding.

## 6. Facts and figures
| Metric | Value | Date | Source | Tag |
|---|---|---|---|---|
| Round | $5M pre-seed (about €4.3M per EU-Startups) | Sep 2026 | [EU-Startups](https://www.eu-startups.com/2026/09/french-agtech-startup-tellia-raises-e4-3-million-to-scale-voice-enabled-data-capture), [Dealroom](https://dealroom.co/news/149352-tellia-raises-5m-pre-seed-to-bring-voice-ai-to-the-farm/) | R |
| Lead | Revent (Fund II, about €100M, writes €500K to €3M cheques at pre-seed and seed, half reserved for follow-ons) | 2025 | [Vestbee](https://www.vestbee.com/insights/articles/german-revent-closes-100-m-fund-ii) | R |
| Co-investors | Grey Silo Ventures (venture arm of Cereal Docks Group, Italy, plant-based ingredients), Jeriko, Fund F | Sep 2026 | [iGrow News](https://igrownews.com/tellia-latest-news/) | R |
| Daily active use | 80%+ of field teams within two months of onboarding | 2026 | [AgNavigator](https://www.agnavigator.com/Article/2026/09/10/tellia-raises-5m-to-make-farm-data-capture-as-easy-as-a-phone-call/) | C |
| Scale of use | "Live across 400,000 hectares" (about 1M acres) in US and Europe | 2026 | AgNavigator; iGrow News | C |
| US launch | California, autumn 2025 | 2025 | AgNavigator | R |
| Employees | 13 | 2026 | iGrow News | R |
| Revenue, pricing, ARR | Not disclosed | n/a | n/a | n/a |

**Sense check on the 400,000-hectare figure.** The two named US customers are modest in size by land area: Campos Brothers Farms is reported in older court filings to have farmed more than 18,000 acres of almonds (roughly 7,300 hectares) **[R, dated]**, and Duckhorn owns about 1,100 vineyard acres **[R]**. Together that is under 3% of 400,000 hectares. The balance must therefore come largely from European cooperatives, institutes, a frozen-vegetable producer organisation (about 234 growers, per one report), and others. This does not make the claim false, but "live across" may count member land of cooperatives where only some growers use the product. **Ask for active users and hectares actually logging data, by customer.**

**Source conflicts.** Announcement date appears as 8 September (iGrow News) and 10 September (AgNavigator article date). HQ is "French" in EU-Startups and "San Francisco and Paris" elsewhere. Preferred: dual HQ, as the company's own site lists both locations. The co-founder's surname is missing in several articles; LinkedIn and Crunchbase show Trastour.

## 7. Market and competition
**Market sizing (illustrative, to be sourced).**
- Top-down: market-research firms put the US farm management software market at about $766M in 2025, growing to about $1.9B by 2034 (IMARC) **[R, low reliability]**. Those figures cover conventional software and understate a voice front-end that creates new usage.
- Bottom-up structure to build in the next iteration: number of target operations (specialty crops, vineyards, orchards, cooperatives, seed and breeding trials) x realistic annual price x achievable share, in the US and EU separately. I have **not** yet sourced the input numbers, so no figure is given here. This is a gap.
- **Wedge.** Specialty crops and vineyards with large seasonal labour teams and compliance burden, plus seed and trial documentation (KWS). **Expansion:** livestock, row crops, advisory services, an API layer for other agritech vendors.
- **US adoption context.** One source reports 63% of US farmers use farm software in some capacity and that precision-ag adoption rises sharply with farm size **[R]**; this conflicts with the CEO's claim that most growers use none, so the "no software" population depends on definition and farm segment.

**Competitor map**
| Competitor | HQ / owner | What it does | Threat |
|---|---|---|---|
| Croptracker | Canada | Spray, labour, harvest records; about $27.50 per user per month, min. 10 users | High: same buyer, same records; no voice-first interface (as far as found) |
| Granular | Corteva | Enterprise farm management, $5,000+ per year | Medium: could add voice |
| Climate FieldView | Bayer | Precision ag platform, about $3 to $6 per acre | Medium: large installed base |
| Trimble Ag | Trimble | Precision ag, GPS-centred | Low to medium |
| AskMyFarm | US | Offline voice and photo scouting | Medium: direct voice competitor, funding unknown |
| VitiScribe | n/a | Vineyard scouting with voice-to-text | Medium: niche overlap |
| Agri AI | n/a | Photo diagnosis and voice agronomy assistant in seven languages | Low to medium |
| General voice AI platforms (ElevenLabs, Deepgram, PolyAI and others) | Various | Voice agent infrastructure | Indirect: could be components or competitors |

The pricing of incumbents gives a reference range for willingness to pay: tens of dollars per user per month, or low single digits per acre. Tellia's own pricing is unknown.

## 8. Return logic
Illustrative, not a forecast.
- **Outcome path.** Becomes the standard field-data interface across specialty agriculture and sells at scale, or is acquired by a farm-software or agri-input company. Plausible acquirers: Corteva (Granular), Bayer (Climate), Trimble, Deere, Syngenta, Nutrien, large distributors and cooperatives. Recalled comparables **[E, from memory, not verified in this session]**: Climate Corporation to Monsanto (about $930M, 2013) and Granular to Corteva (about $300M, 2017).
- **Ownership.** Revent's round size and valuation are not disclosed. Assuming a typical 15 to 20% dilution for a $5M round, a lead might own roughly 8 to 12% on entry **[E]**. After seed and Series A dilution, that falls to about 4 to 7%.
- **Exit size to matter.** To return a €100M fund from this company alone at about 5% ownership, the exit needs to be around €2B, which is far above the recalled agtech software comparables. A realistic fund-relevant outcome is an acquisition in the €200M to €500M range, helping a fund return a few percent of its size, unless the product expands into a much larger platform. **This is the central return tension: strong early adoption, but a modest historical ceiling for farm software exits.**
- **Probability.** I would put the chance of reaching a €500M-plus outcome low, in the single digits to low teens in percent **[E]**, typical for pre-seed, with the upside depending on becoming an infrastructure layer rather than a standalone app.

## 9. Risks and pre-mortem
| Risk | Type | Severity | Mitigant |
|---|---|---|---|
| Incumbents or voice platforms add the same feature | Market | High | Data, integrations, cooperative distribution; speed |
| Unclear willingness to pay; revenue not shown | Market | High | Paid pilots, per-user pricing evidence |
| Usage claims are not independently verified | Evidence | Medium | Customer references, usage data in diligence |
| Wrong agronomic or spray advice causes harm | Product / liability | Medium to high | Source-grounded answers, human review, disclaimers, insurance |
| Seasonal, relationship-driven, slow sales cycles | Commercial | Medium | Land-and-expand with cooperatives |
| Two-continent operation with a 13-person team | Execution | Medium | Focus the wedge; hire senior ag operators |
| Founders without ag domain background | Team | Medium | Advisers, agronomy hires, customer-led roadmap |
| Dependence on third-party AI model providers | Technical / cost | Medium | Model-agnostic stack; cost monitoring |
| Modest exit ceiling in farm software | Return | High | Platform and API expansion |

<div class="callout callout-premortem">

**Pre-mortem (it is 2031 and Tellia failed).**
1. Large farm-software vendors shipped good-enough voice capture inside products growers already pay for, and Tellia was left as a feature.
2. Pilots and enthusiastic use never turned into sizeable contracts; growers loved it but would not pay enough, and sales cycles stayed long.
3. Accuracy or advice errors in a high-stakes season eroded trust at a key customer, and the company could not afford to rebuild the stack and serve two continents.

</div>

## 10. Scorecard
| Dimension | Weight | Score (1-5) | Rationale |
|---|---|---|---|
| Team | 25% | 3.0 | Capable operators with startup experience and a good pairing, but no stated ag domain depth and some unverified background items |
| Problem and insight | 20% | 4.0 | Real, frequent problem; sharp insight that capture is the bottleneck |
| Product and technology defensibility | 20% | 2.5 | Built on widely available models; moat depends on data, integrations and distribution that are not yet evidenced |
| Evidence and traction | 15% | 3.5 | Named customers in two regions and a strong usage claim, but revenue and the scale claim are unverified |
| Market and wedge | 10% | 3.0 | Clear wedge in specialty crops; market not sized bottom-up; exit ceiling concern |
| Business model and financing path | 10% | 3.0 | Pricing unknown; $5M and a strong lead give runway, but next-round bar is not yet defined |
| **Weighted total** | 100% | **3.2 / 5** | Attractive, evidence-light on revenue and moat |

Weights follow the software default in [the methodology](../../methodology/); product defensibility is already penalised given the model-commodity risk.

## 11. Recommendation
**Verdict: Invest, conditional.** I am positive on the insight and early adoption signals, but I would not underwrite a full cheque without the evidence below. The round has already closed, so this is the view I would take at the pre-seed stage, and it translates to a "watch for seed" stance for a new investor.

**Reasoning (short).** The problem is real and the interface choice is smart. The company has reference customers on two continents and a usage claim that, if true, is excellent. The weak points are moat, revenue visibility and a historically modest exit ceiling for farm software.

<div class="callout callout-true">

**What must be true**
1. Daily active use of 80%+ holds across more than one customer and survives beyond onboarding (month-3 and month-6 retention).
2. Customers pay, and at a price that supports a business: a rough target of tens of dollars per user per month or a few dollars per hectare.
3. The data and integration layer gives switching costs, evidenced by partner platforms embedding Tellia's API.
4. Accuracy on field vocabulary, accents and noise is clearly better than general voice tools and general voice features inside incumbent products.
5. The company can expand beyond records into higher-value services (agronomy, compliance, trial documentation) that lift revenue per customer.

</div>

<div class="callout callout-change">

**What would change my mind.**
- *More positive:* a large cooperative or seed company signing a multi-year paid contract; API partnerships with two or more established agritech platforms; net revenue retention above 120%.
- *More negative:* usage drops after pilots; pricing pressure; an incumbent launching a comparable voice feature; evidence that the hectare figure counts non-active land.

</div>

**Investor fit.**
- *US:* Agtech-focused funds and generalist AI funds interested in vertical voice AI and applied agents; strategic investors in agri inputs and distribution. The California foothold and US customers help.
- *Europe:* Revent (lead), food and agri corporate venture arms (Grey Silo), and specialist agrifood funds. The European customer set (IFV, Val de Gascogne, KWS) fits the continent's cooperative structure.
- *Next-round triggers:* a disclosed ARR milestone, a multi-year cooperative or seed-company contract, API partnerships going live, and measurable retention.

## 12. Open diligence questions for the founders
1. What are your active users and active hectares, by customer, and how is "daily active" defined? What does retention look like at months 3, 6 and 12?
2. What is your pricing model, current annual recurring revenue, and how many customers are paying versus on pilots?
3. Which of the 400,000 hectares come from which customers, and how many growers actually log data?
4. What stack do you use for speech and language, how much is proprietary, and what are your inference costs per user?
5. How accurate is transcription and structuring on field terms, accents and noise, and how do you measure it?
6. How do you handle wrong or risky agronomic answers, and where does liability sit?
7. What does an integration with another agritech platform look like, and which partners are live?
8. What is the equity split and IP ownership, and how does your timeline at ARIONEO and Flamingo Filter relate to Tellia's founding?
9. What milestones do you need to hit to raise a seed round, and what valuation and ownership did Revent take?
10. Which competitors do you meet most often in sales, and why do you win or lose?

## 13. Sources
Tiers: 1 primary, 2 company-controlled, 3 independent reporting, 4 aggregator, 5 inference. Accessed 2 October 2026.

- [Tellia company site](https://tellia.com/) · tier 2
- [AgNavigator: Tellia raises $5m](https://www.agnavigator.com/Article/2026/09/10/tellia-raises-5m-to-make-farm-data-capture-as-easy-as-a-phone-call/) · tier 3
- [iGrow News: Tellia latest](https://igrownews.com/tellia-latest-news/) · tier 3
- [EU-Startups: Tellia raises €4.3 million](https://www.eu-startups.com/2026/09/french-agtech-startup-tellia-raises-e4-3-million-to-scale-voice-enabled-data-capture) · tier 3
- [Vestbee: Tellia lands $5M](https://www.vestbee.com/insights/articles/tellia-lands-5-m) · tier 3
- [Dealroom: Tellia raises $5M pre-seed](https://dealroom.co/news/149352-tellia-raises-5m-pre-seed-to-bring-voice-ai-to-the-farm/) · tier 4
- [Vestbee: Revent closes €100M Fund II](https://www.vestbee.com/insights/articles/german-revent-closes-100-m-fund-ii) · tier 3
- [Grey Silo Ventures](https://www.greysiloventures.com/about-us/) · tier 2
- [LinkedIn: Coline Labadie de Faÿ](https://www.linkedin.com/in/coline-labadie-de-fa%C3%BF-b59a86127/) and [Vincent Trastour](https://www.linkedin.com/in/vincent-trastour/) · tier 2, snippets only
- [Crunchbase: Vincent Trastour](https://www.crunchbase.com/person/vincent-trastour) · tier 4
- [Flamingo Filter](https://www.flamingofilter.co/) · tier 2
- [ARIONEO on LinkedIn](https://uk.linkedin.com/company/arioneo) · tier 2
- [Campos Brothers Farms, court filing](https://www.casemine.com/judgement/us/5914e240add7b049348efb76) · tier 1 but dated
- [Duckhorn: history and vineyards](https://www.duckhorn.com/pages/history) · tier 2
- [Croptracker pricing](https://www.croptracker.com/pricing.html) · tier 2
- [IMARC: US farm management software](https://www.imarcgroup.com/united-states-precision-farming-software-market) · tier 4

*Desk research only. Not investment advice.*
