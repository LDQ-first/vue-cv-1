<template>
    <div id="beginLoading">
        <div class="loading">
             <div class="logoImg">
                <img src="../../assets/logo.png">
            </div>
            <canvas id="canvas" width="200" height="200"  ref="canvasLoading"></canvas>
        </div>
        <canvas  id="particles"></canvas>
        <!--<Particles></Particles>-->
        
    </div>
</template>

<script>
    import './beginLoading.scss'
    import beginLoading from './beginLoading.js'
    export default beginLoading
</script>