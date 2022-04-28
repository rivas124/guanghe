import DefaultBaseLayout from '../components/layouts/DefaultBaseLayout';

export function getBaseLayoutComponent(pageBaseLayout, siteConfigBaseLayout) {
    const layout = pageBaseLayout || siteConfigBaseLayout || 'DefaultBaseLayout';
    let BaseLayout;
    if (layout === 'DefaultBaseLayout') {
        BaseLayout = DefaultBaseLayout;
    } else {
        BaseLayout = DefaultBaseLayout;
    }
    if (!BaseLayout) {
        throw new Error(`no BaseLayout: ${pageBaseLayout} or ${siteConfigBaseLayout}`);
    }
    return BaseLayout;
}
