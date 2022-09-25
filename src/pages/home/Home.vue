<script setup>
import IconCheckSmallRounded from '~icons/material-symbols/check-small-rounded';

import userPhoto from '~/assets/images/user-photo.jpg';
</script>

<template>
  <div class="tw-px-4 sm:tw-px-6 lg:tw-px-8 tw-py-8 tw-w-full tw-max-w-9xl tw-mx-auto">
    <div class="tw-max-w-3xl tw-m-auto">
      <div class="xl:tw--translate-x-16">
        <article>
          <div class="xl:tw-flex">
            <div class="tw-w-32 tw-shrink-0">
              <h2
                class="tw-text-xl tw-leading-snug tw-font-bold tw-text-slate-800 xl:tw-leading-7 tw-mb-4 xl:tw-mb-0"
              >
                2022 V2.0
              </h2>
            </div>
            <div class="tw-grow tw-pb-6">
              <header>
                <div class="tw-flex tw-flex-nowrap tw-items-center tw-space-x-2 tw-mb-6">
                  <div class="tw-flex tw-shrink-0 tw--space-x-3 tw--ml-px">
                    <img
                      class="tw-block tw-rounded-full tw-border-2 tw-border-white tw-box-content"
                      :src="userPhoto"
                      width="28"
                      height="28"
                      alt="User 05"
                    />
                    <img
                      class="tw-block tw-rounded-full tw-border-2 tw-border-white tw-box-content"
                      :src="userPhoto"
                      width="28"
                      height="28"
                      alt="User 08"
                    />
                  </div>
                  <div class="tw-text-slate-400">·</div>
                  <q-badge
                    rounded
                    label="Completed"
                    class="tw-text-xs tw-inline-flex tw-font-medium tw-bg-green-100 tw-text-green-600 tw-px-2.5 tw-py-1"
                  />
                </div>
              </header>
              <ul class="tw--my-2">
                <li class="tw-relative tw-py-2">
                  <div class="tw-flex tw-items-center tw-mb-1">
                    <div
                      class="tw-absolute tw-left-0 tw-h-full tw-w-0.5 tw-bg-slate-200 tw-self-start tw-ml-2.5 tw--translate-x-1/2 tw-translate-y-3"
                      aria-hidden="true"
                    ></div>
                    <div
                      class="tw-absolute tw-left-0 tw-rounded-full tw-bg-indigo-500"
                      aria-hidden="true"
                    >
                      <icon-check-small-rounded
                        class="tw-w-5 tw-h-5 tw-fill-current tw-text-white"
                      />
                    </div>
                    <h3 class="tw-text-lg tw-font-bold tw-text-slate-800 tw-pl-9">
                      Product V1 - Early Access
                    </h3>
                  </div>
                  <div class="tw-pl-9">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.
                  </div>
                </li>

                <li class="tw-relative tw-py-2">
                  <div class="tw-flex tw-items-center tw-mb-1">
                    <div
                      class="tw-absolute tw-left-0 tw-h-full tw-w-0.5 tw-bg-slate-200 tw-self-start tw-ml-2.5 tw--translate-x-1/2 tw-translate-y-3"
                      aria-hidden="true"
                    ></div>
                    <div
                      class="tw-absolute tw-left-0 tw-rounded-full tw-bg-indigo-500"
                      aria-hidden="true"
                    >
                      <icon-check-small-rounded
                        class="tw-w-5 tw-h-5 tw-fill-current tw-text-white"
                      />
                    </div>
                    <h3 class="tw-text-lg tw-font-bold tw-text-slate-800 tw-pl-9">
                      Product V1 - Early Access
                    </h3>
                  </div>
                  <div class="tw-pl-9">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </article>

        <article class="tw-pt-6">
          <div class="xl:tw-flex">
            <div class="tw-w-32 tw-shrink-0">
              <h2
                class="tw-text-xl tw-leading-snug tw-font-bold tw-text-slate-800 xl:tw-leading-7 tw-mb-4 xl:tw-mb-0"
              >
                2021 V1.0
              </h2>
            </div>
            <div class="tw-grow tw-pb-6">
              <header>
                <div class="tw-flex tw-flex-nowrap tw-items-center tw-space-x-2 tw-mb-6">
                  <div class="tw-flex tw-shrink-0 tw--space-x-3 tw--ml-px">
                    <img
                      class="tw-block tw-rounded-full tw-border-2 tw-border-white tw-box-content"
                      :src="userPhoto"
                      width="28"
                      height="28"
                      alt="User 05"
                    />
                    <img
                      class="tw-block tw-rounded-full tw-border-2 tw-border-white tw-box-content"
                      :src="userPhoto"
                      width="28"
                      height="28"
                      alt="User 08"
                    />
                  </div>
                  <div class="tw-text-slate-400">·</div>
                  <q-badge
                    rounded
                    label="Completed"
                    class="tw-text-xs tw-inline-flex tw-font-medium tw-bg-green-100 tw-text-green-600 tw-px-2.5 tw-py-1"
                  />
                </div>
              </header>
              <ul class="tw--my-2">
                <li class="tw-relative tw-py-2">
                  <div class="tw-flex tw-items-center tw-mb-1">
                    <div
                      class="tw-absolute tw-left-0 tw-h-full tw-w-0.5 tw-bg-slate-200 tw-self-start tw-ml-2.5 tw--translate-x-1/2 tw-translate-y-3"
                      aria-hidden="true"
                    ></div>
                    <div
                      class="tw-absolute tw-left-0 tw-rounded-full tw-bg-indigo-500"
                      aria-hidden="true"
                    >
                      <icon-check-small-rounded
                        class="tw-w-5 tw-h-5 tw-fill-current tw-text-white"
                      />
                    </div>
                    <h3 class="tw-text-lg tw-font-bold tw-text-slate-800 tw-pl-9">
                      Product V1 - Early Access
                    </h3>
                  </div>
                  <div class="tw-pl-9">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.
                  </div>
                </li>

                <li class="tw-relative tw-py-2">
                  <div class="tw-flex tw-items-center tw-mb-1">
                    <div
                      class="tw-absolute tw-left-0 tw-h-full tw-w-0.5 tw-bg-slate-200 tw-self-start tw-ml-2.5 tw--translate-x-1/2 tw-translate-y-3"
                      aria-hidden="true"
                    ></div>
                    <div
                      class="tw-absolute tw-left-0 tw-rounded-full tw-bg-indigo-500"
                      aria-hidden="true"
                    >
                      <icon-check-small-rounded
                        class="tw-w-5 tw-h-5 tw-fill-current tw-text-white"
                      />
                    </div>
                    <h3 class="tw-text-lg tw-font-bold tw-text-slate-800 tw-pl-9">
                      Product V1 - Early Access
                    </h3>
                  </div>
                  <div class="tw-pl-9">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
