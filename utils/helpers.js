module.exports = {
    isLinkActive: (page, link) => {
        return page == link ? 'active' : '';
    },

    isDisplayable: (type) => {
        const accept = [
            'image/png',
            'image/jpeg',
            'image/gif',
            'image/svg+xml',
            'image/tiff',
            'application/pdf'
        ]
        return accept.findIndex(t => type == t) > -1;
    },
    isPDF: (type) => {
        return type == 'application/pdf' ? 'pdf' : '';
    },
    getIcon: (name) => {
        const icons = [
            'jpg.svg',
            'pdf.svg',
            'png.svg',
            'txt.svg'
        ];
        const icon = `${name.split('.').pop()}.svg`;
        return icons.findIndex(i => icon == i) > -1 ? `/icons/${icon}` : '/icons/unknown.svg';
    }
}
