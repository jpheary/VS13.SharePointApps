(function () {
    alert('newcriteriaitem()');
    var customRenderingOverride = {};
    customRenderingOverride.Templates = {};
    customRenderingOverride.BaseViewID = "NewForm";
    customRenderingOverride.ListTemplateType = "100";
    customRenderingOverride.Templates.Fields = {
        "AuditSource": { "NewForm": renderSource }
    };
    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(customRenderingOverride);
})();

function renderSource(ctx) {
    alert('renderSource()');
}
