({
    getResponse: function(component, input) {
        var arrayName = []
		var arrayName2 = " ";
        
        var action = component.get("c.getCalloutResponse");
        action.setParams({
            "id": input
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            console.log("HELLOWORLD");
            
            
            if (state === "SUCCESS") {
                var returnValue = response.getReturnValue();
                console.log("Hello World");
                component.set("v.input", returnValue.name);
                component.set("v.input2", returnValue.base_experience);
                component.set("v.input4", returnValue.Id);
                component.set("v.input6", returnValue.height);
                component.set("v.input8", returnValue.weight);
                console.log(returnValue);
                //console.log(returnValue.attack);
                console.log(returnValue.Stats.hp);
                
                for (var i = 0; i< returnValue.abilities.length; i++ ){
                    
                    arrayName = component.get("v.input5") + " , " + returnValue.abilities[i].ability.Name;
                    component.set("v.input5", arrayName);
                    
				}
                
                for (var i = 0; i< returnValue.Stats.length; i++ ){
                    //component.get defence = returnValue.abilities[i].ability.Name;
                    var statObject = returnValue.Stats[i];
                    var baseStat = statObject.base_stat;
                    var stat = statObject.stat;
                    var statName = stat.Name;
                    
                    console.log(statObject + " " + baseStat + " "+ stat + " " + statName);
                    if (statName == "attack" ){
                    	component.set("v.attack", baseStat);
                        component.set("v.total", component.get("v.total") + baseStat);
      				} else if (statName == "defense" ){
                    	component.set("v.defense", baseStat);
                        component.set("v.total", component.get("v.total") + baseStat);
                    }else if (statName == "special-attack" ){
                    	component.set("v.specialAttack", baseStat);
                        component.set("v.total", component.get("v.total") + baseStat);
      				}else if (statName == "special-defense" ){
                    	component.set("v.specialDefense", baseStat);
                        component.set("v.total", component.get("v.total") + baseStat);
      				}else if (statName == "speed" ){
                    	component.set("v.speed", baseStat);
                        component.set("v.total", component.get("v.total") + baseStat);
                    }
                    
				}
                
                for (var j = 0; j< returnValue.types.length; j++ ){
                   
				    arrayName2 = component.get("v.input7") + " , " + returnValue.types[j].type.Name;
                    component.set("v.input7", arrayName2);
                }   
                
 				//console.log(returnValue.abilities.is_hidden);
            }
        });
        $A.enqueueAction(action);
    },
})