({
	getAccounts : function(component) {
		
        
        let action = component.get("c.accountsNR");
        
        action.setCallback(this, function(response){
            
            
            let ngc = response.getState();
            console.log(ngc);
            
            if(ngc == "SUCCESS"){
                
                component.set("v.acc", response.getReturnValue());
                console.log(response.getReturnValue());
                
                
            }
                
        });   
        $A.enqueueAction(action);
	}
})
