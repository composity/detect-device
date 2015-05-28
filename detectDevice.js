function getDevice() {
    var device = 'desktop';
    var mobile = (/mobile/i.test(navigator.userAgent.toLowerCase()));

    if (mobile) {
        if (screen.width > 640) {
            device = 'tablet';
        } else {
            device = 'mobile';
        }
    }

    return device;
}
