<template>
    <div class="github section-item">
        <div class="container-fluid">
            <h2>
                Source code
            </h2>
            <div class="row">
                <div class="col-sm-12 col-md-4">
                    <ul class="list-unstyled">
                        <li v-for="file in repo.files" v-if="file.type == 'blob'"><span v-on:click="linkClick"
                                class="source-link" v-bind:data-url="file.url">{{ file.path }}</span></li>
                    </ul>
                </div>
                <div class="col-sm-12 col-md-8">
                    <div v-if="selectedFile">
                        <h3>{{ selectedFile.path }}</h3>
                        <highlight-code auto >{{ selectedFileContents }}</highlight-code>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "GitHub",
  
    data() {
        return {
            repo: {
                readOnlyToken: "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",
                name: "SeppoLaineCV",
                apiUrl: "https://api.github.com/repos/hittoSepi/SLCV/git/trees/main?recursive=1",
                files: [],
            },
            selectedFile: null,
            selectedFileContents: null,
            headers: null,
        };
    },
    mounted() {
        var _self = this;

        this.headers = new Headers();
        this.headers.append("Authorization", "Bearer " + this.repo.readOnlyToken);
        this.headers.append("X-GitHub-Api-Version", "2022-11-28")


        fetch(this.repo.apiUrl, { headers: _self.headers })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.repo.files = data.tree.reverse();
                // check if app.js exists and select it
                let appJs = this.repo.files.find(file => file.path == "html/js/app.js");
                if (appJs) {
                    _self.selectFile(appJs);
                }
            });
    },
    methods: {
        async selectFile(file) {
            var _self = this;
            this.selectedFile = file;
            this.selectedFileContents = null;
            await fetch(file.url, { headers: _self.headers })
                .then(response => response.json())
                .then(data => {
                    _self.selectedFileContents = atob(data.content);
                });



        },
        linkClick(event) {
            event.preventDefault();
            this.selectFile({ url: event.target.dataset.url });
        }
    }
}
</script>