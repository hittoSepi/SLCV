<template>
    <div class="github section-item">
        <div class="container-fluid">
            <h2>
                Source code
            </h2>
            <div class="row">
                <div class="col-sm-12 col-md-4">
                    <ul class="list-unstyled">
                        <li v-for="file in repo.files" v-if="isSourceFile(file)"><span v-on:click="linkClick"
                                class="source-link" v-bind:data-url="file.url">{{ file.path }}</span></li>
                    </ul>
                </div>
                <div class="col-sm-12 col-md-8">
                    <div v-if="selectedFile">
                        <p>{{ selectedFile.path }}</p>
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
                name: "SLCV",
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
  //      this.headers.append("Authorization", "Bearer " + this.repo.readOnlyToken);
        this.headers.append("X-GitHub-Api-Version", "2022-11-28")


        fetch(this.repo.apiUrl, { headers: _self.headers })
            .then(response => response.json())
            .then(data => {
                this.repo.files = data.tree.reverse();
                // check if app.js exists and select it
                let appJs = this.repo.files.find(file => file.path == "src/main.js");
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
            this.selectFile({ url: event.target.dataset.url, path: event.target.innerText });
        },
      
        isSourceFile(file) {
            return file.type == "blob" && file.path.match(/\.(vue|js|html|css)$/i) && !file.path.match(/\.(min.css)$/i) && !file.path.match(/(build)/i) && !file.path.match(/(build|config)/i) && !file.path.match(/^\./i);
        },
    }
}
</script>