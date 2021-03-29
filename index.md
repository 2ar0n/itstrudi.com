---
permalink: /
title: Trudi - Homepage
---

<div class="flex justify-center flex-wrap p-5">
    {% for item in site.data.soaps.soaps %}
      <div class="max-w-sm rounded overflow-hidden shadow-lg my-2 m-5 mt-12 bg-white bg-opacity-75 transition duration-500 ease-in-out transform group hover:scale-110">
          <div class="relative">
            <picture>
                <source srcset="/assets/pictures/{{ item.picture }}.webp" type="image/webp">
                <source srcset="/assets/pictures/{{ item.picture }}.png" type="image/png"> 
                <img src="/assets/pictures/{{ item.picture }}.png" alt="Picture of {{ item.name }}">
            </picture>
            {% if item.sold_out %}
                <div class="absolute z-50 bottom-1 right-1 -translate-x-10 -translate-y-1/2 flex items-center text-center justify-center w-32 h-32 p-5 rounded-full bg-white group-hover:bg-green-200 text-pink-400 group-hover:text-white text-2xl font-semibold cursor-pointer duration-500 select-none">SOLD OUT</div>
            {% endif %}
          </div>
          <div class="px-6 pt-4 pb-4">
            <div class="font-bold text-xl mb-1">{{ item.name }}</div>
            <div class="divide-y-2">
                <p>{{ item.description }}</p>
                <div>
                    <p class="text-grey-darker text-base font-semibold">Aroma</p>
                    <div class="flex flex-wrap text-grey-darker text-base items-center">
                        {% for aroma in item.tags %}
                            <div class="rounded-full bg-gray-200 p-2 m-1 text-center">{{ aroma }}</div>
                        {% endfor %}
                    </div>
                </div>
                <div>
                    <p class="text-grey-darker text-base font-semibold">Suited to</p>
                    <p>{{ item.suitability }}</p>
                </div>
                <div>
                    <p class="text-grey-darker text-base font-semibold">Key ingredients</p>
                    <div class="flex flex-wrap text-grey-darker text-base items-center">
                        {% for ingredient in item.ingredients %}
                            <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">{{ ingredient }}</span>
                        {% endfor %}
                    </div>
                </div>
            </div>
          </div>
        </div>
    {% endfor %}
</div>

<div id="wcb" class="carbonbadge wcb-d"></div>
<script src="https://unpkg.com/website-carbon-badges@1.1.1/b.min.js" defer></script>
