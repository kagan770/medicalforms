Ext.define("medicalForms.view.ConfirmList", {
    extend: "Ext.dataview.List",
    alias: "widget.confirmlist",
    config: {
        loadingText: "Loading Notes...",
        emptyText: "<div class=\"notes-list-empty-text\">No notes found.</div>",
        onItemDisclosure: true,
        itemTpl: "{name}"        
    }
});