<script lang="ts">
    // @ts-nocheck
	import SvelteTable from 'svelte-table';
    let src = "https://www.espol.edu.ec/sites/default/files/Foto%20para%20Rnaking%20by%20subject.jpg";
    
    // tailwinds
</script>

<div class="mt-24">
    <div class="bloque1">
        <imagen>
            <img {src} alt="ESPOL">

        </imagen><br><br>
        <h1><b>Portal de datos abiertos públicos. Información de estaciones meterológicas.
            Si de desea ver los datos haga clic <i><a href="/tabla" target="_blank"> aqui</a></i></b></h1>
    </div>
 
</div>

<style>
    imagen {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    img {
        height: 500px;
    }
</style> 