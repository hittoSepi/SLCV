<template>
    <div class="hobbies section-item">
        <div class="container-fluid">
            <h2>
                Hobbies
            </h2>
            <div class="w-25 d-inline-flex align-content-center align-content-center flex-column hobby__item" v-for="hobby in hobbies">
                <div class="hobby__item-icon">
                    <img :src="hobby.icon" />
                </div>
              
                <div class="hobby__item-name">
                    {{hobby.name}}
                </div>
            </div>
        </div>
	</div>
</template>

<script>
export default {
    name: "Hobbies",
    data() {
        return {
            hobbies: [
                {
                    name: "Programming",
                    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAm0lEQVR4nO2UPQ6DMAyFvyXq1fhZyjUZ6AIXKj0EYjFCMhJDExRbwNA+6Q2x7PcpSmT4K1M18AHE6BEoU4DRES7qdwqwNVklR/OXAcTp+wFWiRUQ1LGzCxCAF9Duaq3WghcQNGgGnrt6BUzAADysgFh4CpIN6BTQRNbKCuitgBSk/hJuApz+yJd80xwdzp++rktt8IQXWXfm57UA2hitO1mZfrcAAAAASUVORK5CYII="
                },
                {
                    name: "Gaming",
                    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEQUlEQVR4nO2aW4hVZRTHf2qOOup4yxRUUmgyIS9gT5m3wMs4amppCEFg2oMPXlEKRB8UdHxQxAtkPembFwi1iyhCJFp5N42ixMuIkqXo6FiJ44kF/y3L8ex99pmzj2c2+IcNZ+9vrfWt9V3Wt9b6DjxHSfAdcIyUowuQAf4m5aiSIYdJMcqB4zLkY1KK3sD3MuI00IaUoTuwBrgrIy4AfUgRXgHWAfdkgD07tNmbPVoBU4D9wCNnwAFgOClAW2Celk2gvC2lz4DBpAQfAlecAb8Cc4EKUoKewDfOgPPATKAlKUJ/4KI7oT9ImwHBeXBdRhzVzKQOLwA/yohDOqlTiY9khC2rbqQULYHLMmQGKcZbMuIPoAXNBNXAt8BNoF4jvRdYALwUwlMjQ9ZmaesBLAT2SVa9ZFsfE4phgB1Su53vz/b8B2xVrOSxT+3vum9G87l4omTuBDomGYWeleA7wBKNfjtFo6bgl0CDaB4qyJsGvKwT275PBt6Tcg/1rUG80ySrnWZpqfoymjPAi4UaYW7yBwn8GegbQVsZc5Qzimw3iycM/dRncO6UF+L797qNajMTB9nWvRl3CfhK+6lrTFnd1bfpsEdRct5YIQE3coxcsVEJ/CVdlufLPEijaLnBaEqPt6WL6TQwnyV1TCOwieaDLdLpFNA6DsN8MVxK0vUlgI7SKSMdI1HuIlRLPUtx4F4FalXHaowp0u16Li+2RITHI8IJ70aTRq2TbdljY5hOJ9S+OExIB3koI5oY0VkpDTFMUvufQHuyYI4IfiIaxTSkSsaYEeNDaFo4Z2TpwVM4rMZZWdpyndSZIu2J6pD2IL+xCuQTeFV+uj7EUxXLkFxLqTakvUK6PmocpK4S8baQDpubIYbt+r4Sh1P6OI7cSHKP5NoTVRHt46TDyeBDZ4XTD8K8wDPc7NU59oxHe+lsKUGngNmUOhKzs1K7X48jop3gU1Er4ZcatXkaEui+Gle+LEVI0pRzxGOqdLc853Eq+jrJYYDuOM7LTdpzTt9eS7CfQdL9F3u5pZe4WVsUzHF84fL3bE+DUmKjLRTd/E1vkGOXFSh0pCvENajIMEoxXAf93uUuciwkH1Fgn2WugsM/erFLl6bAYp9PXWXE/PqQCPohogkqLp8UULhrKzn3kd/OqHSTLyo0yhmNdE3MmS1TwS6YnV1NvODp5z3c102sy74B/C7e26pb5Yt3xJuRrKF58r/vvdYCvVihLO50Lnd760SBVZZKlyz9CyzLY5nvEd+8oHZUp2keE8FkNaXp7uLS6NcndIFvMja4pXZBVcmo26yxoq/zlchFEnBHCVYnjUovHUxrXeIfzMIwksdw5wiC+5QaBYi9pFNn/Y2jTjRWDHwM8xobY4TqdnjOLvK9Xyv18VsMfWwWs8Ly4YM6JM0tX9NVmcVhbz7j+w3ry2bd+jYdTBfTyXSzPxI8UVf4Hzx2sNbPpkujAAAAAElFTkSuQmCC"
                },
                {
                    name: "Making music",
                    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACAUlEQVR4nO2ZvS8FQRTFfwoSBAmJiMSfoNBQEJWO9weg9FHjJaKS1YiCFyWJDolE+dDoRU+lUqifRCGCWJlkXzJZnjf74WWXc5Jb7Z2dc8/OvXNnFgRBEARBEIQfMQaUgDJwmXEzHHeAUVJAD3AO+Dk1I0Z33OC7gNsMBJHUboDOOAIcWC/5AA6BaWDCsmcHAgXLf8/B/zThHIbjUcC5+nw/avB9wLv1grkafk8O5Dos/6KD/3bCOapYsJ6/Ab1RBJi1Bl/94JdlAQyuLZ+ZKAKsWQNLORagZPmYmJzhWQO9HAvgGscXSAC0AlAKoBqAiiDaBdA2SG2oD0CNEOoEUSuMzgLoMIROg+g4zL+7D3ioQ+wFaLb85x2CWU84R0MF2K1D7iTkP1Dni74CgwnnaKgALcAqcBG6RTZ/aDaA9m/GDAVX7HeW/30QyHhKczRMABtPDjlJjXoQzvu05pAAaAWgFEA1ABVBtAugbZAI8NQHoEbIVyeIWmFfZwHYzPFhaDONTrCcYwHO0hDgDRjOoQAjofuD2AL4QCW4zupPidxvCmA4LgKPoRgSCeD/AZMAaAW4w/vvKVDMAOG0bTmKAIUMEE7bJqMI0PbNNpJnM9t4axQB/loaLBEDTcBxBsgntcMgllhoAlZymg6V4MvHDh4LpiaYwmgq6VbGzXCccs35T+dErjxQx4VGAAAAAElFTkSuQmCC"
                }
            ]
        }
    }
}
</script>