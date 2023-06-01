<template>
    <div class="github section-item">
        <div class="container-fluid">
            <h2>
                Source code
            </h2>
            <div class="row">
                <div class="col-sm-12 col-md-4 col-lg-4">
                    <strong>Files</strong>
                    <ul class="file__listing list-unstyled list-group">
                        <li :class="file.selected == true ? 'active source-link list-group-item' : 'source-link list-group-item'" v-on:click="linkClick" class="source-link list-group-item" v-bind:data-url="file.url" v-bind:data-path="file.path" v-for="file in repo.files" v-if="isSourceFile(file)">
                            <span >{{ parseFileNameFromPath(file) }}</span>
                        </li>
                    </ul>
                </div>
                <div class="col-sm-12 col-md-8 col-lg-8 ">
                    <div v-if="selectedFile">
                        <strong>{{ parseFileNameFromPath(selectedFile) }}</strong>
                        <highlight-code auto >{{ selectedFileContents }}</highlight-code>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'dotenv/config';


export default {
    name: "GitHub",
  
    data() {
        return {
            repo: {
                readOnlyToken: process.env.GITHUB_TOKEN,
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
        this.headers.append("Authorization", "Bearer " + this.repo.readOnlyToken);
        this.headers.append("X-GitHub-Api-Version", "2022-11-28")


        fetch(this.repo.apiUrl, { headers: _self.headers })
            .then(response => response.json())
            .then(data => {
               
                data.tree.forEach(file => {
                    _self.repo.files.push({url:file.url, path:file.path, type:file.type, selected:false});
                });

                let appJs = this.repo.files.find(file => file.path == "src/main.js");
                if (appJs) {
                    appJs.selected = true;
                    _self.selectFile(appJs);
                }
            });
    },
    methods: {
        async selectFile(f) {
            let _file = this.repo.files.find(file => file.path == f.path);
            var _self = this;
            _file.selected = true;
            this.selectedFile = _file;
            this.selectedFileContents = null;

            await fetch(_file.url, { headers: _self.headers })
                .then(response => response.json())
                .then(data => {
                    _self.selectedFileContents = atob(data.content);
            });
        },
      
        linkClick(event) {
            event.preventDefault();
            this.repo.files.forEach(file => {
                file.selected = false;
            });
            let _file = this.repo.files.find(file => file.path == event.target.dataset.path);
            this.selectFile(_file);
        },
      
        isSourceFile(file) {
            return file.type == "blob" && file.path.match(/\.(vue|js|html|css|json|less)$/i) && !file.path.match(/(.min.css|lock.json)$/i) && !file.path.match(/(build)/i) && !file.path.match(/(build|config)/i) && !file.path.match(/^\./i);
        },
        parseFileNameFromPath(file) {
            return file.path.split("/").pop();
        },

    }
}
</script>