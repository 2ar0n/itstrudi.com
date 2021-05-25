---
permalink: /
title: ItsTrudi - Homepage
layout: default
description: Order beautiful hard soap bars, handmade from natural and vegan ingredients in Geneva, Switzerland.
---

<div class="flex justify-center flex-wrap p-5">
    <!-- https://stackoverflow.com/questions/45651759/is-there-a-way-to-sort-lists-in-jekyll-by-two-fields -->
    {% assign grouped_as_available_soldout = site.data.season3.soaps | group_by: 'sold_out' | sort: 'sold_out' | reverse %}
    {% for group in grouped_as_available_soldout %}
        {% for item in group.items %}
        <div class="max-w-sm rounded overflow-hidden shadow-lg my-2 m-5 mt-12 bg-white bg-opacity-75 transition duration-500 ease-in-out transform group hover:scale-110">
            <div class="relative">
                <picture>
                    <source srcset="/assets/pictures/season3/{{ item.picture }}.webp" type="image/webp">
                    <source srcset="/assets/pictures/season3/{{ item.picture }}.jpg" type="image/jpg"> 
                    <img src="/assets/pictures/season3/{{ item.picture }}.jpg" alt="Picture of {{ item.name }}">
                </picture>
                {% if item.sold_out %}
                    <div class="absolute z-50 bottom-1 right-1 -translate-x-10 -translate-y-1/2 flex items-center text-center justify-center w-32 h-32 p-5 rounded-full bg-white group-hover:bg-green-200 text-pink-400 group-hover:text-white text-2xl font-semibold cursor-pointer duration-500 select-none">SOLD OUT</div>
                {% endif %}
            </div>
            <div class="px-6 pb-4">
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
    {% endfor %}
</div>

<div class="flex justify-center">
    <a href="/season2" class="rounded-full bg-pink-100 py-4 px-6 m-1 flex items-center mb-5">
        Previous season 2
        <svg class="h-5 w-5 ml-2 fill-current" clasversion="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="-49 141 512 512" style="enable-background:new -49 141 512 512;" xml:space="preserve">
        <path id="XMLID_11_" d="M-24,422h401.645l-72.822,72.822c-9.763,9.763-9.763,25.592,0,35.355c9.763,9.764,25.593,9.762,35.355,0l115.5-115.5C460.366,409.989,463,403.63,463,397s-2.634-12.989-7.322-17.678l-115.5-115.5c-9.763-9.762-25.593-9.763-35.355,0c-9.763,9.763-9.763,25.592,0,35.355l72.822,72.822H-24c-13.808,0-25,11.193-25,25S-37.808,422-24,422z"/>
        </svg>
    </a>
</div>
