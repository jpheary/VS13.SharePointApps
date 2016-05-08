(function () {
    alert('criteriaitems()');
    var customRenderingOverride = {};
    customRenderingOverride.Templates = {};
    customRenderingOverride.Templates.Fields = {
        "AuditSource": { "View": renderSource }
    };
    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(customRenderingOverride);
})();

function renderSource(ctx) {
    alert('renderSource()');
}
