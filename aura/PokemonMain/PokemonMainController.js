({
    onClick : function(component, event, helper) {       
        var input = component.get("v.name");
        var LOA = component.get("v.ListOfAbilites")
        component.set("v.total",0);
        component.set("v.input5"," ");
        component.set("v.input7"," ");
        //var numberForDisplay = component.get("v.number");
        console.log(input);
        helper.getResponse(component, input, LOA);
        
        
    },
    
   
})