---
layout: about
title: about
permalink: /
subtitle: Research Associate, Adobe. ML + Systems for efficient LLM and video generation.

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>Email: <a href="mailto:saisundaresan01@gmail.com">saisundaresan01@gmail.com</a></p>
    <p>LinkedIn: <a href="https://www.linkedin.com/in/sai-narayan-sundaresan/" target="_blank">sai-narayan-sundaresan</a></p>
    <p>Google Scholar: <a href="https://scholar.google.com/citations?user=icwyFlQAAAAJ&hl=en" target="_blank">icwyFlQAAAAJ</a></p>

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

I build practical, efficient ML systems at the intersection of Machine Learning and Systems. My current research focuses on reducing inference cost and latency in generative models by uncovering redundancies and enabling reuse of computation.

Recently, I have:

- Developed chunk-cache management for RAG-style LLM serving achieving ~2.7× prefill speedups while preserving quality.
- Built patch-level reuse for video generation via rectified flow interpolation (ongoing).
- Trained and deployed speech systems (ASR/TTS) and built a guided audio lesson generation pipeline.

Previously, I completed a Dual Degree (B.Tech + M.Tech) in Industrial and Systems Engineering at IIT Kharagpur (GPA 9.15/10), with a micro‑specialization in AI.

The site includes a curated list of publications, selected projects, patents, and a CV.

<section id="about"></section>

<section id="publications"></section>

<div class="publications">
{% bibliography %}
</div>

<section id="projects"></section>

<div class="projects">
  {% assign sorted_projects = site.projects | sort: "importance" %}
  <div class="row row-cols-1">
    {% for project in sorted_projects %}
      <div class="col-sm-12 mt-3 mt-md-0">
        <h3>{{ project.title }}</h3>
        {% if project.description %}<p>{{ project.description }}</p>{% endif %}
      </div>
    {% endfor %}
  </div>
</div>

<section id="patents"></section>

- [Filed] Heterogenous LLMs for Subjective Behaviors. US Patent App. 19/215,758.
- [Filed] Utilizing Digital Page Sequence Tokens with Large Language Models to Generate Digital User Activity Predictions. US Patent App. 19/050,836.
- [Filed] Managing Chunk Caches for Efficient Retrieval-Augmented Generation. US Patent App. 19/074,061.

<section id="cv"></section>

<a class="btn btn-primary" href="{{ 'assets/pdf/example.pdf' | relative_url }}" target="_blank" rel="noopener">Download CV (PDF)</a>

<section id="contact"></section>

You can reach me at [saisundaresan01@gmail.com](mailto:saisundaresan01@gmail.com).
