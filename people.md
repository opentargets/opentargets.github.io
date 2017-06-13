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


# Platform team

The [Open Targets Platform](https://www.targetvalidation.org) is developed by a diverse group of individuals with skills in bioinformatics, computer science and web development:


<ul>
{% for member in site.data.platformteam %}
  <li>
      {{ member.name }}, {{ member.role }}, {{ member.institute }} {% include icon-github.html username=member.github %}
  </li>
{% endfor %}
</ul>

*in alphabetical order*
