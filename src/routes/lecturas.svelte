<script lang="ts">
    // @ts-nocheck
	import SvelteTable from 'svelte-table';
    let src = "https://www.espol.edu.ec/sites/default/files/Foto%20para%20Rnaking%20by%20subject.jpg";
    
    // tailwinds
</script>


<div class="espolsquare">
    <div class="imagen">
        <img class="foto" {src} alt="ESPOL"/>

    </div>
        
</div>
<div class="text">
    <h1><b>Portal de datos abiertos públicos. Información acerca de variables meterologócias medidas por las siguientes estaciones ubicadas en ESPOL:</b></h1>
        <ul>
            <li class="estaciones">Estación CENAIM. Para ver los datos haga clic <i><a class="vinculo" href="/tabla" target="_blank"> aqui</a></i></li>
            <li class="estaciones">Estación GEA</li>
        </ul>
        
</div>

<footer class="footer">
    <p>© Escuela Superior Politécnica del Litoral - 2022 ©</p>

    <p>Siguenos en nuestras redes</p>
    
    <li class="socialMedias">
        <a href="https://www.instagram.com/espol1/" target="_blank"><img class="instagram" alt="ig" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1200px-Instagram-Icon.png"/></a>
        <a href="https://www.twitter.com/espol/" target="_blank"><img class="twitter" alt="tw" src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" /></a>
    </li>
</footer>
 
<style>
    .imagen {
        margin-top: 4%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .foto {
        height: 500px;
    }
   
    .espolsquare {
        position: fixed;
        width: 100%;
        left: 0;
        background-color: #B2E3F8;
        padding: 1rem;
        display: flex;
        flex-direction: column;
    }
    .text {
        position: fixed;
        margin-top: 33%;
        font-family:Georgia, 'Times New Roman', Times, serif;
    }
    .vinculo {
        color: red;
    }

    .estaciones {
        margin-left: 3%;
        list-style-type: circle;
        
    }
    a {
        color: purple;
        width: 50px;
        height: 50px;
    }

    .footer{
        background-color: #B2E3F8;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        text-align: center;
    }


    .socialMedias{
        margin-left: 48%;
        list-style-type: none;
    }

    .instagram{
        float: center;
        width:50px;
        height:50px;
    }

    .twitter{
        float: center;
        width:55px;
        height:55px;
    }
    
</style> 