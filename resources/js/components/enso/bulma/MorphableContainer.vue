<template>
    <tabs alignment="centered"
        custom>
        <span slot="label"
            slot-scope="{ tab }">
            {{ __(tab) }}
            <span class="tag is-dark file-counter">
                {{ count[tab.toLowerCase()] }}
            </span>
        </span>
        <tab id="Addresses"
            v-if="addresses">
            <addresses controls
                :type="type"
                :id="id"
                @update="count.addresses = $refs.addresses.count"
                ref="addresses"/>
        </tab>
        <tab id="Comments"
            v-if="comments">
            <comments controls
                :type="type"
                :id="id"
                @update="count.comments = $refs.comments.count"
                ref="comments"/>
        </tab>
        <tab id="Contacts"
            v-if="contacts">
            <contacts controls
                :type="type"
                :id="id"
                @update="count.contacts = $refs.contacts.count"
                ref="contacts"/>
        </tab>
        <tab id="Discussions"
            v-if="discussions">
            <discussions controls
                :type="type"
                :id="id"
                @update="count.discussions = $refs.discussions.count"
                ref="discussions"/>
        </tab>
        <tab id="Documents"
            v-if="documents">
            <documents controls
                :type="type"
                :id="id"
                @update="count.documents = $refs.documents.count"
                ref="documents"/>
        </tab>
    </tabs>
</template>

<script>

import Tabs from './Tabs.vue';
import Tab from './Tab.vue';
import Addresses from '../addresses/Addresses.vue';
import Comments from '../comments/Comments.vue';
import Contacts from '../contacts/Contacts.vue';
import Discussions from '../discussions/Discussions.vue';
import Documents from '../documents/Documents.vue';

export default {
    name: 'MorphableContainer',

    components: {
        Tabs, Tab, Addresses, Comments, Contacts, Discussions, Documents,
    },

    props: {
        id: {
            type: Number,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        addresses: {
            type: Boolean,
            default: false,
        },
        contacts: {
            type: Boolean,
            default: false,
        },
        comments: {
            type: Boolean,
            default: false,
        },
        discussions: {
            type: Boolean,
            default: false,
        },
        documents: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {
            count: {
                addresses: 0,
                comments: 0,
                contacts: 0,
                discussions: 0,
                documents: 0,
            },
        };
    },
};

</script>
