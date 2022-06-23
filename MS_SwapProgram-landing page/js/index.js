
/* function TabItems(evt, TabList) {
   
    var Tab_content = document.getElementsByClassName("swap-tab-content");
    for (let i = 0; i < Tab_content.length; i++) {
      Tab_content[i].style.display = "none";
    }
    var Tab_links = document.getElementsByClassName("swap-tab-link");
    for (let i = 0; i < Tab_links.length; i++) {
      Tab_links[i].className = Tab_links[i].className.replace(" active", "");
    }
    document.getElementById(TabList).style.display = "block";
    evt.currentTarget.className += " active";
  }

  document.getElementById("defaultTab").click(); */


  function TabItems(event, tabList){

      var tabContent= document.getElementsByClassName("swap-tab-content");

      for(let i=0; i<tabContent.length; i++){
          tabContent[i].style.display="none";
      }

      var tabLinks=document.getElementsByClassName("swap-tab-link");

      for(let i=0; i<tabLinks.length; i++){
          tabLinks[i].className=tabLinks[i].className.replace("swp-active", "");
      }

      document.getElementById(tabList).style.display= "block";

      event.currentTarget.className += " swp-active";

  }

  document.getElementById("defaultTab").click();