---
permalink: /season2
title: Trudi - Homepage
---

<div class="bg-pink-50 border-t-4 border-pink-500 rounded-b text-pink-700 px-4 py-3 shadow-md mx-4 md:mx-20 mt-12" role="alert">
  <div class="flex">
    <svg class="h-6 w-6 text-teal mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg>
    <div>
      <p class="font-bold">These soaps from season 2 are no longer available</p>
      <p class="text-sm">Please let me know through Instagram if you wish some soaps to be reeditioned.</p>
    </div>
  </div>
</div>

<div class="flex justify-center flex-wrap p-5">
    {% for item in site.data.season2.soaps %}
      <div class="max-w-sm rounded overflow-hidden shadow-lg my-2 m-5 mt-12 bg-white bg-opacity-75 transition duration-500 ease-in-out transform hover:scale-110">
          <picture>
            <source srcset="/assets/pictures/{{ item.picture }}.webp" type="image/webp">
            <source srcset="/assets/pictures/{{ item.picture }}.png" type="image/png"> 
            <img src="/assets/pictures/{{ item.picture }}.png" alt="Picture of {{ item.name }}">
          </picture>
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

