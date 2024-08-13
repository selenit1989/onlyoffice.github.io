(function(window, undefined){
    
  var text = "Hello world!";

  window.Asc.plugin.init = function(){  
      this.executeMethod("AddToolbarMenuItem", [getToolbarItems()]);

      this.attachToolbarMenuClickEvent("insertPhrase", function(data) {
        console.log("the data is" + data)
        this.callCommand(function() {
          var oDocument = Api.GetDocument();
          var oParagraph = Api.CreateParagraph();
          oParagraph.AddText("hello world");
          oDocument.InsertContent([oParagraph]);
      }, true);
      });
   
  function getToolbarItems() {
      console.log ()
      let items = {
          guid: window.Asc.plugin.info.guid,
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
};


})(window);
