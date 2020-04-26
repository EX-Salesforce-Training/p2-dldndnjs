public class PokemonMainController {
	@auraEnabled
    public static Pokemon getCalloutResponse(String id) {
        Http newHTTP = new Http();
        Httprequest request = new HttpRequest();
        request.setEndpoint('https://pokeapi.co/api/v2/pokemon/' + id);
        request.setMethod('GET');
        System.debug('https://pokeapi.co/api/v2/pokemon/' + id);
        
        HttpResponse httpRes = newHTTP.send(request);
     	//Map<String, Object> Pokemon = new Map<String, Object>();
        Pokemon responseBody = new Pokemon();
       
        if(httpRes.getStatusCode() == 200) {
            responseBody = (Pokemon) JSON.deserialize(httpRes.getBody(),pokemon.class);
            System.debug(responseBody);
            for(abilities ab : responseBody.abilities){
                System.debug(ab.ability.name);
                //System.debug(ab.ability.is_hidden);                
            }
            for(types ty : responseBody.types){
               System.debug(ty.type.name);
            }
            //for(types ty : responseBody.types){
            //     System.debug(ty.type.hp);
            //}
            System.debug('Recieved the following: ');
            System.debug(responseBody);
        }        
        return responseBody;
    }
}