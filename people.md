---
layout: bootstrap
title: People
permalink: /people/
---

# Leadership

<!-- <ul class="post-list">
    {% for leader in site.data.leaders %}
      <li>
        <h4>
          {{ leader.name | escape }}, {{ leader.role }}
        </h4>
        <div id="left">
         {% if leader.pic %}
      <img src="{{ site.url }}/assets/images/{{ leader.pic }}" height="150" class="biopic">
      {% endif %}
      </div>
      <div id="right">
        {{leader.bio}}
        </div>
      </li>
    {% endfor %}
  </ul> -->

<!-- <ul class="post-list"> -->
<div class="container">
    {% for leader in site.data.leaders %}
    <div>


        <!-- <div> -->
            <div class="row bioentry">
                <div class="col-sm-3 text-center">

                {% if leader.pic %}
                    <img src="{{ site.url }}/assets/images/{{ leader.pic }}" class="biopic img-thumbnail img-circle">
                {% endif %}
                </div>
                <div class="col-sm-9">
                <h4>{{ leader.name | escape }}, {{ leader.role }}</h4>
                    {{leader.bio}}
                </div>
            </div>
        <!-- </div> -->
    </div>
    {% endfor %}
<!-- </ul> --></div>




# Scientific Advisory Board

The Open Targets Scientific Advisory Board established in 2016 comprises of:

<ul>
{% for member in site.data.sab %}
  <li>
      <a href="{{ member.url }}">{{ member.name }}</a>, {{ member.role }}, {{ member.dept }},{{ member.inst }},{{ member.nation }}
  </li>
{% endfor %}
</ul>


# Platform Team

The [Open Targets Platform](https://www.targetvalidation.org) is developed by a diverse group of individuals with skills in bioinformatics, computer science and web development:


<ul>
{% for member in site.data.platformteam %}
  <li>
      {{ member.name }}, {{ member.role }}, {{ member.institute }}
      {% if member.github %}{% include icon-github.html username=member.github %}{% endif %}
      {% if member.twitter %}{% include icon-twitter.html username=member.twitter %}{% endif %}
  </li>
{% endfor %}
</ul>


# Genetics Core Team

The Genetics Core team focuses on using human genetics data to guide therapeutic target identification and prioritisation, inform drug repositioning and predict toxicity effects. The team is currently developing a first of its kind Genetics portal that will enable users to browse, visualise and interpret human genetics and genomics data to unravel the genetic underpinnings of human diseases and traits and to give insights into disease biology so that this knowledge gets translated into therapeutic hypothesis. 


<ul>
{% for member in site.data.geneticscore %}
  <li>
      {{ member.name }}, {{ member.role }}, {{ member.institute }}, {{ member.email }}
      {% if member.github %}{% include icon-github.html username=member.github %}{% endif %}
      {% if member.twitter %}{% include icon-twitter.html username=member.twitter %}{% endif %}
  </li>
{% endfor %}
</ul>

# Operations

The Open Targets Operations team provides day-to-day administrative support for the Open Targets Leadership team along with specialised support for our bioinformatics and experimental projects.

<ul>
{% for member in site.data.operations %}
  <li>
      {{ member.name }}, {{ member.role }}, {{ member.institute }}, {{ member.email }}
      {% if member.github %}{% include icon-github.html username=member.github %}{% endif %}
      {% if member.twitter %}{% include icon-twitter.html username=member.twitter %}{% endif %}
  </li>
{% endfor %}
</ul>