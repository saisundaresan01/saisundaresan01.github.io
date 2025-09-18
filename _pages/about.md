---
layout: about
title: about
permalink: /
subtitle:

profile:
  align: right
  image: prof_pic.jpg
  image_circular: true # crops the image to make it circular
  more_info: ""

selected_papers: false # keep single-page simple; full list shown below
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # disabled for simplicity
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<section id="about"></section>

<style>
.update {
  padding: 8px;
  border-radius: 7px;
  margin-bottom: 11px;
  max-width: 510px;
  margin-left: -2px;
  margin-top: 2px;
  border: 2px solid #b1b1b1;
}
.update a {
  color: #ff0000;
  font-weight: bold;
  text-decoration: none;
}
.update a:hover {
  color: #cc0000;
}
</style>

<div class="update">
  Applying for a PhD in Computer Science, Fall 2026
</div>

I am a Research Associate at Adobe (Systems and Insights Group) working on Machine Learning and Systems. My work focuses on making generative models efficient at inference time by uncovering redundancies and enabling reuse of computation.

At Adobe, I have worked on efficient LLM serving (chunk-cache reuse for RAG) and on caching for video generation models. Before that, I completed a Dual Degree (B.Tech, M.Tech) from the department of Industrial and Systems Engineering at IIT Kharagpur (GPA 9.15/10.00) with a micro‑specialization in AI. With over 1 year of experience in academic and industrial research, I have publications in SIGMOD, EMNLP, and INTERSPEECH.

If you would like to discuss ideas or collaborate, feel free to contact me at <a href="mailto:saisundaresan01@gmail.com">saisundaresan01@gmail.com</a>.

<section id="publications"></section>

<h1>Publications</h1>
<div class="publications">
{% bibliography --query @* --group_by none %}
</div>

<!-- Projects section removed -->

<section id="patents"></section>

<h1>Patents</h1>
<div class="patents">
  <div class="d-flex align-items-start mb-3">
    <span class="badge badge-info mr-3">USPTO</span>
    <div>
      <div><strong>Heterogenous LLMs for Subjective Behaviors.</strong></div>
      <div><em>US Patent App. 19/215,758 Filed</em></div>
      <div>Sai Narayan Sundaresan, Atanu R Sinha, Harshita Chopra, Koustava Goswami, Raghav Karan, Nagasai Saketh Naidu, Anushka N.</div>
    </div>
  </div>
  <div class="d-flex align-items-start mb-3">
    <span class="badge badge-info mr-3">USPTO</span>
    <div>
      <div><strong>Utilizing Digital Page Sequence Tokens with Large Language Models to Generate Digital User Activity Predictions.</strong></div>
      <div><em>US Patent App. 19/050,836 Filed</em></div>
      <div>Harshita Chopra, Nagasai Saketh Naidu, Raghav Karan, Anushka N, Atanu R Sinha, Koustava Goswami, Sai Narayan Sundaresan.</div>
    </div>
  </div>
  <div class="d-flex align-items-start mb-3">
    <span class="badge badge-info mr-3">USPTO</span>
    <div>
      <div><strong>Managing Chunk Caches for Efficient Retrieval-Augmented Generation.</strong></div>
      <div><em>US Patent App. 19/074,061 Filed</em></div>
      <div>Shubham Agarwal, Sai Narayan Sundaresan, Subrata Mitra, Debabrata Mahapatra, Archit Gupta, Rounak Sharma, Nirmal Joshua Kapu, Tong Yu, Shiv Saini.</div>
    </div>
  </div>
</div>

<section id="cv"></section>

<section id="contact"></section>
