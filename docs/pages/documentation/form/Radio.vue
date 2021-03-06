<template>
    <div class="container">
        <h1 class="title is-spaced">Radio</h1>
        <h2 class="subtitle">Select an option from a set</h2>
        <hr>

        <div class="columns">
            <div class="column">
                <div class="block">
                    <b-radio v-model="radio"
                        native-value="Flint">
                        Flint
                    </b-radio>
                    <b-radio v-model="radio"
                        native-value="Silver">
                        Silver
                    </b-radio>
                    <b-radio v-model="radio"
                        native-value="Jack">
                        Jack
                    </b-radio>
                    <b-radio v-model="radio"
                        native-value="Vane"
                        disabled>
                        Vane
                    </b-radio>
                </div>
                <p class="content"><b>Selection:</b> {{ radio }}</p>
            </div>
            <div class="column">
                <pre class="block" v-highlight><code class="html">{{ template1 | pre }}</code></pre>
                <pre v-highlight><code class="javascript">{{ code1 | pre }}</code></pre>
            </div>
        </div>

        <hr>
        <h2 class="title">Radio Button</h2>
        <p class="content">You have to wrap them on a <router-link to="/documentation/field">Field</router-link>.</p>
        <div class="example">
            <b-field>
                <b-radio-button v-model="radioButton"
                    native-value="Nop"
                    type="is-danger">
                    <b-icon icon="clear"></b-icon>
                    <span>Nop</span>
                </b-radio-button>

                <b-radio-button v-model="radioButton"
                    native-value="Yep"
                    type="is-success">
                    <b-icon icon="done"></b-icon>
                    <span>Yep</span>
                </b-radio-button>

                <b-radio-button v-model="radioButton"
                    native-value="Default">
                    Default
                </b-radio-button>

                <b-radio-button v-model="radioButton"
                    native-value="Disabled"
                    disabled>
                    Disabled
                </b-radio-button>
            </b-field>
            <p class="content"><b>Selection:</b> {{ radioButton }}</p>
        </div>
        <pre class="block" v-highlight><code class="html">{{ template2 | pre }}</code></pre>
        <pre v-highlight><code class="javascript">{{ code2 | pre }}</code></pre>

        <hr>

        <h2 class="title is-spaced">API</h2>
        <h3 class="subtitle">Radio</h3>
        <b-tabs>
            <b-tab-item label="Properties">
                <b-table :data="radioProps" default-sort="name">
                    <template scope="props">
                        <b-table-column field="name" label="Name">
                            <span v-html="props.row.name"></span>
                        </b-table-column>
                        <b-table-column field="description" label="Description" width="620">
                            <span v-html="props.row.description"></span>
                        </b-table-column>
                        <b-table-column field="type" label="Type">
                            <span>{{ props.row.type }}</span>
                        </b-table-column>
                        <b-table-column field="values" label="Values">
                            <span v-html="props.row.values"></span>
                        </b-table-column>
                        <b-table-column field="default" label="Default">
                            <span v-html="props.row.default"></span>
                        </b-table-column>
                    </template>
                </b-table>
            </b-tab-item>

            <b-tab-item label="Events">
                <b-table :data="radioEvents" default-sort="name">
                    <template scope="props">
                        <b-table-column field="name" label="Name">
                            <span v-html="props.row.name"></span>
                        </b-table-column>
                        <b-table-column field="description" label="Description" width="620">
                            <span v-html="props.row.description"></span>
                        </b-table-column>
                        <b-table-column field="parameters" label="Parameters">
                            <span v-html="props.row.parameters"></span>
                        </b-table-column>
                    </template>
                </b-table>
            </b-tab-item>
        </b-tabs>

        <h3 class="subtitle">Radio Button</h3>
        <b-tabs>
            <b-tab-item label="Properties">
                <b-table :data="radioButtonProps" default-sort="name">
                    <template scope="props">
                        <b-table-column field="name" label="Name">
                            <span v-html="props.row.name"></span>
                        </b-table-column>
                        <b-table-column field="description" label="Description" width="620">
                            <span v-html="props.row.description"></span>
                        </b-table-column>
                        <b-table-column field="type" label="Type">
                            <span>{{ props.row.type }}</span>
                        </b-table-column>
                        <b-table-column field="values" label="Values">
                            <span v-html="props.row.values"></span>
                        </b-table-column>
                        <b-table-column field="default" label="Default">
                            <span v-html="props.row.default"></span>
                        </b-table-column>
                    </template>
                </b-table>
            </b-tab-item>

            <b-tab-item label="Events">
                <b-table :data="radioEvents" default-sort="name">
                    <template scope="props">
                        <b-table-column field="name" label="Name">
                            <span v-html="props.row.name"></span>
                        </b-table-column>
                        <b-table-column field="description" label="Description" width="620">
                            <span v-html="props.row.description"></span>
                        </b-table-column>
                        <b-table-column field="parameters" label="Parameters">
                            <span v-html="props.row.parameters"></span>
                        </b-table-column>
                    </template>
                </b-table>
            </b-tab-item>
        </b-tabs>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                radio: 'Vane',
                radioButton: '',
                radioProps: [
                    {
                        name: '<code>v-model</code>',
                        description: 'Binding value',
                        type: 'Any',
                        values: '—',
                        default: '—'
                    },
                    {
                        name: '<code>native-value</code>',
                        description: 'Same as native <code>value</code>',
                        type: 'Any',
                        values: '—',
                        default: '—'
                    },
                    {
                        name: '<code>disabled</code>',
                        description: 'Same as native <code>disabled</code>',
                        type: 'Boolean',
                        values: '—',
                        default: '<code>false</code>'
                    },
                    {
                        name: '<code>name</code>',
                        description: 'Same as native <code>name</code>',
                        type: 'String',
                        values: '—',
                        default: '—'
                    }
                ],
                radioEvents: [
                    {
                        name: '<code>input</code>',
                        description: 'Triggers when the value of checkbox is changed',
                        parameters: '<code>value: Boolean</code>'
                    },
                    {
                        name: '<code>[any].native</code>',
                        description: 'Listen to any event using this syntax, e.g <code>click.native</code>',
                        parameters: '<code>event: $event</code>'
                    }
                ],
                radioButtonProps: [
                    {
                        name: '<code>v-model</code>',
                        description: 'Binding value',
                        type: 'Any',
                        values: '—',
                        default: '—'
                    },
                    {
                        name: '<code>native-value</code>',
                        description: 'Same as native <code>value</code>',
                        type: 'Any',
                        values: '—',
                        default: '—'
                    },
                    {
                        name: '<code>type</code>',
                        description: 'Type (color) of the button <strong>when checked</strong>',
                        type: 'String',
                        values: `<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,
                            <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,
                            <code>is-warning</code>, <code>is-danger</code>,
                            and any other colors you've set in the <code>$colors</code> list on Sass`,
                        default: '<code>is-primary</code>'
                    },
                    {
                        name: '<code>disabled</code>',
                        description: 'Same as native <code>disabled</code>',
                        type: 'Boolean',
                        values: '—',
                        default: '<code>false</code>'
                    },
                    {
                        name: '<code>name</code>',
                        description: 'Same as native <code>name</code>',
                        type: 'String',
                        values: '—',
                        default: '—'
                    }
                ],
                template1: `
                <div class="block">
                    <b-radio v-model="radio"
                        native-value="Flint">
                        Flint
                    </b-radio>
                    <b-radio v-model="radio"
                        native-value="Silver">
                        Silver
                    </b-radio>
                    <b-radio v-model="radio"
                        native-value="Jack">
                        Jack
                    </b-radio>
                    <b-radio v-model="radio"
                        native-value="Vane"
                        disabled>
                        Vane
                    </b-radio>
                </div>
                <p class="content"><b>Selection:</b> {{ radio }}</p>`,
                code1: `
                export default {
                    data() {
                        return {
                            radio: 'Vane'
                        }
                    }
                }`,
                template2: `
                <b-field>
                    <b-radio-button v-model="radioButton"
                        native-value="Nop"
                        type="is-danger">
                        <b-icon icon="clear"></b-icon>
                        <span>Nop</span>
                    </b-radio-button>

                    <b-radio-button v-model="radioButton"
                        native-value="Yep"
                        type="is-success">
                        <b-icon icon="done"></b-icon>
                        <span>Yep</span>
                    </b-radio-button>

                    <b-radio-button v-model="radioButton"
                        native-value="Default">
                        Default
                    </b-radio-button>

                    <b-radio-button v-model="radioButton"
                        native-value="Disabled"
                        disabled>
                        Disabled
                    </b-radio-button>
                </b-field>
                <p class="content"><b>Selection:</b> {{ radioButton }}</p>`,
                code2: `
                export default {
                    data() {
                        return {
                            radioButton: ''
                        }
                    }
                }`
            }
        }
    }
</script>
