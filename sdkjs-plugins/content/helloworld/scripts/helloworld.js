(function(window, undefined){
    
  var text = "Hello world!";

  window.Asc.plugin.init = function(){ 
      this.executeMethod("AddToolbarMenuItem", [getToolbarItems()]);
  
      var variant = 2;

      switch (variant)
      {
          case 0:
          {
              var sScript = "var oDocument = Api.GetDocument();";
              sScript += "oParagraph = Api.CreateParagraph();";
              sScript += "oParagraph.AddText('Hello world!');";
              sScript += "oDocument.InsertContent([oParagraph]);";
              this.info.recalculate = true;
              this.executeCommand("close", sScript);
              break;
          }
          case 1:
          {
              this.callCommand(function() {
                  var oDocument = Api.GetDocument();
                  var oParagraph = Api.CreateParagraph();
                  oParagraph.AddText("Hello world!");
                  oDocument.InsertContent([oParagraph]);
              }, true);
              break;
          }
          case 2:
          {
              Asc.scope.text = text; 
              this.callCommand(function() {
                  var oDocument = Api.GetDocument();
                  var oParagraph = Api.CreateParagraph();
                  oParagraph.AddText(Asc.scope.text);
                  oDocument.InsertContent([oParagraph]);
              }, true);
              break;
          }
          default:
              break;
      }

      this.attachToolbarMenuClickEvent("insertPhrase", function(data) {
          console.log("TRIGGERED");
      });
  };
  
  window.Asc.plugin.button = function(id)
  {
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
