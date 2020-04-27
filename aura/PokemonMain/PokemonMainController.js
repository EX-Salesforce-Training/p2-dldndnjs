({
    onClick : function(component, event, helper) {       
        var input = component.get("v.name");
        component.set("v.total",0);
        component.set("v.input5"," ");
        component.set("v.input7"," ");

        console.log(input);
        helper.getResponse(component, input);
        
        
    },
    
   
})