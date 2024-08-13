(function(window, undefined){
    
  var text = "Hello world!";

  window.Asc.plugin.init = function(){ 
      this.executeMethod("AddToolbarMenuItem", [getToolbarItems()]);

      this.attachToolbarMenuClickEvent("insertPhrase", function(data) {
        console.log("the data is" + data)
        Asc.scope.text = "hello world"; 
        this.callCommand(function() {
          var oDocument = Api.GetDocument();
          var oParagraph = Api.CreateParagraph();
          oParagraph.AddText(Asc.scope.text);
          oDocument.InsertContent([oParagraph]);
      }, true);
      });
  };
  
  function getToolbarItems() {
      const plugin = window.Asc.plugin.info;
      let items = {
          guid: plugin.guid,
          tabs: [{
              id: "hello_world_tab",
              text: "Hello World",
              items: [
              {
                  id: "insertPhrase",
                  type: "button",
                  text: "Insert",
                  hint: "insert Hello World phrase",
                  icons: "resources/buttons/icon.png", 
                  lockInViewMode: true,
                  enableToggle: false,
                  separator: false
              }
              ]
          }]
      };
      
      return items;
  }    

})(window);
