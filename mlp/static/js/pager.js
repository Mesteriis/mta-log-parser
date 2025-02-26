    app.component('pager', {
        template: `
        <div v-if="!$parent.loading" class="ui buttons">
            <button class="ui labeled icon button navi" :class="{disabled: !has_prev}" @click="$emit('update:modelValue', 1);">
                <i class="angle double left icon"/><span v-if="$parent.localeData.pager.first" v-html="$parent.localeData.pager.first"></span><span v-else v-html="$parent.fallbackLocaleData.pager.first"></span>
            </button>
            <button class="ui labeled icon button navi" :class="{disabled: !has_prev}" @click="$emit('update:modelValue', page - 1);">
                <i class="left chevron icon"/><span v-if="$parent.localeData.pager.previous" v-html="$parent.localeData.pager.previous"></span><span v-else v-html="$parent.fallbackLocaleData.pager.previous"></span>
            </button>
            <button class="ui button disabled navi">
                <i class="list icon"/> <strong><span v-if="$parent.localeData.pager.total" v-html="$parent.localeData.pager.total"></span><span v-else v-html="$parent.fallbackLocaleData.pager.total"></span> {{ total_emails }} <span v-if="$parent.localeData.pager.emails" v-html="$parent.localeData.pager.emails"></span><span v-else v-html="$parent.fallbackLocaleData.pager.emails"></span></strong>
            </button>
            <button @click="$parent.loadEmails(true)" class="ui button navi">
                <i class="sync icon"/> <span v-if="$parent.localeData.pager.refresh" v-html="$parent.localeData.pager.refresh"></span><span v-else v-html="$parent.fallbackLocaleData.pager.refresh"></span>
            </button>
            <button class="ui button disabled navi">
                <i class="book open icon"/> <strong><span v-if="$parent.localeData.pager.page" v-html="$parent.localeData.pager.page"></span><span v-else v-html="$parent.fallbackLocaleData.pager.page"></span> {{ page }} <span v-if="$parent.localeData.pager.of" v-html="$parent.localeData.pager.of"></span><span v-else v-html="$parent.fallbackLocaleData.pager.of"></span> {{ pageCount }}</strong>
            </button>
            <button class="ui right labeled icon button navi" :class="{disabled: !has_next}" 
                    @click="$emit('update:modelValue', page + 1);"><span v-if="$parent.localeData.pager.next" v-html="$parent.localeData.pager.next"></span><span v-else v-html="$parent.fallbackLocaleData.pager.next"></span><i class="right chevron icon"/>
            </button>
            <button class="ui right labeled icon button navi" :class="{disabled: !has_next}" @click="$emit('update:modelValue', pageCount);">
                <span v-if="$parent.localeData.pager.last" v-html="$parent.localeData.pager.last"></span><span v-else v-html="$parent.fallbackLocaleData.pager.last"></span><i class="angle double right icon"/>
            </button>
        </div>`,

        props: {
            modelValue: {
                default: 1,
                type: Number
            },
            pageCount: {
                default: 1,
                type: Number
            },
            emailsCount: {
                default: 0,
                type: Number
            }
        },
        computed: {
            page() {
                return this.modelValue
            },
            has_next() {
                return this.page < this.pageCount;
            },
            has_prev() {
                return this.page > 1;
            },
            total_emails() {
                return this.emailsCount
            },
        }
    });

