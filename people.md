---
layout: page
title: People
permalink: /people/
---

# Leadership

<ul class="post-list">
    {% for leader in site.data.leaders %}
      <li>
        <h4>
          <!--<a class="post-link" href="{{ post.url | relative_url }}">-->
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
  </ul>


# Scientific Advisory Board 

The Open Targets Scientific Advisory Board established in 2016 comprises of:

<ul>
{% for member in site.data.sab %}
  <li>
      <a href="{{ member.url }}">{{ member.name }}</a>, {{ member.role }}, {{ member.dept }},{{ member.inst }},{{ member.nation }}
  </li>
{% endfor %}
</ul>



