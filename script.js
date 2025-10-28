document.addEventListener('DOMContentLoaded', function() {
    
    const dropdownToggles = document.getElementsByClassName("dropdown-toggle");
    const dropdownMenus = document.getElementsByClassName("dropdown_menu");
    
    const OPEN_CLASS = "dropdown_open";

    Array.from(dropdownToggles).forEach((toggle, index) => {
        
        
        toggle.addEventListener("mouseenter", () => {
            
            if (dropdownMenus[index]) {
                dropdownMenus[index].classList.add(OPEN_CLASS);
                console.log(`Menü ${index + 1} açıldı.`);
            }
        });
        
        toggle.addEventListener("mouseleave", () => {
            if (dropdownMenus[index]) {
                dropdownMenus[index].classList.remove(OPEN_CLASS);
                console.log(`Menü ${index + 1} kapandı.`);
            }
        });
    });
});