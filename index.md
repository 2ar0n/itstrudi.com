---
permalink: /
title: Trudi - Homepage
---

<div class="flex justify-center flex-wrap p-5">
    {% for item in site.data.soaps.soaps %}
      <div class="max-w-sm rounded overflow-hidden shadow-lg my-2 m-5 mt-12 bg-white bg-opacity-75 transition duration-500 easi-in-out transform hover:scale-110">
          <img class="w-full lazy" src="/assets/pictures/{{ item.picture }}.png" alt="Picture of {{ item.name }}">
          <div class="px-6 pt-4">
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
                            <div class="rounded-full bg-gray-200 p-2 m-1 text-center">{{ ingredient }}</div>
                        {% endfor %}
                    </div>
                </div>
            </div>
          </div>
        </div>
    {% endfor %}
</div>

