// AppAnalytics.js
import { createClient } from '@segment/analytics-react-native';
import { Alert } from 'react-native';
import { WebEngagePlugin } from 'react-native-segment-plugin-webengage';

import WebEngage from 'react-native-webengage';

class AppAnalytics {
    static instance = null;
    segmentClient = null;
    webengage = null;

    static getInstance() {
        if (!AppAnalytics.instance) {
            AppAnalytics.instance = new AppAnalytics();
        }
        return AppAnalytics.instance;
    }



    init() {

        this.segmentClient = createClient({
            writeKey: 'gaZvQjMOjy274ROC3S5UfleBR8VvRyM8',
            debug: true,
        });
        this.webengage = new WebEngage();
        this.setupInAppCallbacks();
    }

    setupInAppCallbacks() {
        this.webengage.notification.onShown(function (notificationData) {

        });

        this.webengage.notification.onClick(function (notificationData, clickId) {
            Alert.alert("Notification Click", JSON.stringify(notificationData));
        });
    }

    addWebEngage() {
        if (!this.segmentClient) {
            console.warn('Segment client not initialized. Call init() first.');
            return;
        }
        this.segmentClient.add({ plugin: new WebEngagePlugin() });
    }

    trackEvent(eventName, attributes) {

        if (!this.segmentClient) {
            console.warn('Segment client not initialized. Call init() first.');
            return;
        }
        this.segmentClient.track(
            eventName,
            attributes
        );
    }

    trackScreen(screenName, attributes) {

        if (!this.segmentClient) {
            console.warn('Segment client not initialized. Call init() first.');
            return;
        }
        this.segmentClient.screen(screenName, attributes);
    }

    trackIdentify(userId, attributes) {
        if (!this.segmentClient) {
            console.warn('Segment client not initialized. Call init() first.');
            return;
        }
        this.segmentClient.identify(userId, attributes);
    }

    logout() {
        if (!this.segmentClient) {
            console.warn('Segment client not initialized. Call init() first.');
            return;
        }
        this.segmentClient.reset();
    }

}

export default AppAnalytics;
