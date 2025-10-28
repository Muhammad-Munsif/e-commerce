// src/components/admin/Settings.js
import React, { useState } from "react";
import { 
  FaSave, 
  FaStore, 
  FaShippingFast, 
  FaCreditCard, 
  FaEnvelope, 
  FaShieldAlt,
  FaBell,
  FaGlobe,
  FaPalette
} from "react-icons/fa";
import Footer from "../Footer";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [settings, setSettings] = useState({
    // General Settings
    general: {
      storeName: "EasyShop",
      storeEmail: "support@easyshop.com",
      storePhone: "+1 (555) 123-4567",
      storeAddress: "123 Commerce St, City, State 12345",
      currency: "USD",
      timezone: "America/New_York",
      maintenanceMode: false
    },
    // Payment Settings
    payment: {
      stripeEnabled: true,
      paypalEnabled: true,
      cashOnDelivery: true,
      stripePublicKey: "pk_test_...",
      stripeSecretKey: "sk_test_...",
      paypalClientId: "A...",
      testMode: true
    },
    // Shipping Settings
    shipping: {
      freeShippingEnabled: true,
      freeShippingThreshold: 50,
      flatRateShipping: 5.99,
      shippingRegions: ["US", "CA", "EU", "UK"],
      processingTime: "1-2 business days"
    },
    // Email Settings
    email: {
      smtpHost: "smtp.gmail.com",
      smtpPort: "587",
      smtpUsername: "noreply@easyshop.com",
      smtpPassword: "********",
      orderNotifications: true,
      marketingEmails: true,
      adminNotifications: true
    },
    // Notification Settings
    notifications: {
      newOrder: true,
      lowStock: true,
      newUser: false,
      paymentFailed: true,
      orderShipped: true,
      emailNotifications: true,
      pushNotifications: false
    }
  });

  const handleSaveSettings = () => {
    // Here you would typically make an API call to save settings
    console.log("Saving settings:", settings);
    alert("Settings saved successfully!");
  };

  const handleInputChange = (section, field, value) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const tabs = [
    { id: "general", name: "General", icon: FaStore },
    { id: "payment", name: "Payment", icon: FaCreditCard },
    { id: "shipping", name: "Shipping", icon: FaShippingFast },
    { id: "email", name: "Email", icon: FaEnvelope },
    { id: "notifications", name: "Notifications", icon: FaBell },
    { id: "security", name: "Security", icon: FaShieldAlt },
  ];

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Store Name</label>
          <input
            type="text"
            value={settings.general.storeName}
            onChange={(e) => handleInputChange("general", "storeName", e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Store Email</label>
          <input
            type="email"
            value={settings.general.storeEmail}
            onChange={(e) => handleInputChange("general", "storeEmail", e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Store Phone</label>
          <input
            type="text"
            value={settings.general.storePhone}
            onChange={(e) => handleInputChange("general", "storePhone", e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
          <select
            value={settings.general.currency}
            onChange={(e) => handleInputChange("general", "currency", e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="GBP">GBP (£)</option>
            <option value="CAD">CAD (C$)</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Store Address</label>
        <textarea
          value={settings.general.storeAddress}
          onChange={(e) => handleInputChange("general", "storeAddress", e.target.value)}
          rows={3}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="maintenanceMode"
          checked={settings.general.maintenanceMode}
          onChange={(e) => handleInputChange("general", "maintenanceMode", e.target.checked)}
          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label htmlFor="maintenanceMode" className="ml-2 text-sm text-gray-700">
          Enable Maintenance Mode
        </label>
      </div>
    </div>
  );

  const renderPaymentSettings = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div>
            <h4 className="font-medium text-gray-900">Stripe</h4>
            <p className="text-sm text-gray-600">Accept credit card payments</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.payment.stripeEnabled}
              onChange={(e) => handleInputChange("payment", "stripeEnabled", e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div>
            <h4 className="font-medium text-gray-900">PayPal</h4>
            <p className="text-sm text-gray-600">Accept PayPal payments</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.payment.paypalEnabled}
              onChange={(e) => handleInputChange("payment", "paypalEnabled", e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div>
            <h4 className="font-medium text-gray-900">Cash on Delivery</h4>
            <p className="text-sm text-gray-600">Accept cash payments on delivery</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.payment.cashOnDelivery}
              onChange={(e) => handleInputChange("payment", "cashOnDelivery", e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>

      {settings.payment.stripeEnabled && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-gray-50 rounded-lg">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Stripe Public Key</label>
            <input
              type="text"
              value={settings.payment.stripePublicKey}
              onChange={(e) => handleInputChange("payment", "stripePublicKey", e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Stripe Secret Key</label>
            <input
              type="password"
              value={settings.payment.stripeSecretKey}
              onChange={(e) => handleInputChange("payment", "stripeSecretKey", e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      )}

      <div className="flex items-center">
        <input
          type="checkbox"
          id="testMode"
          checked={settings.payment.testMode}
          onChange={(e) => handleInputChange("payment", "testMode", e.target.checked)}
          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label htmlFor="testMode" className="ml-2 text-sm text-gray-700">
          Enable Test Mode
        </label>
      </div>
    </div>
  );

  const renderShippingSettings = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
        <div>
          <h4 className="font-medium text-gray-900">Free Shipping</h4>
          <p className="text-sm text-gray-600">Offer free shipping on orders above threshold</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={settings.shipping.freeShippingEnabled}
            onChange={(e) => handleInputChange("shipping", "freeShippingEnabled", e.target.checked)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </div>

      {settings.shipping.freeShippingEnabled && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Free Shipping Threshold ($)</label>
          <input
            type="number"
            value={settings.shipping.freeShippingThreshold}
            onChange={(e) => handleInputChange("shipping", "freeShippingThreshold", parseFloat(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Flat Rate Shipping ($)</label>
        <input
          type="number"
          step="0.01"
          value={settings.shipping.flatRateShipping}
          onChange={(e) => handleInputChange("shipping", "flatRateShipping", parseFloat(e.target.value))}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Processing Time</label>
        <input
          type="text"
          value={settings.shipping.processingTime}
          onChange={(e) => handleInputChange("shipping", "processingTime", e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="e.g., 1-2 business days"
        />
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "general":
        return renderGeneralSettings();
      case "payment":
        return renderPaymentSettings();
      case "shipping":
        return renderShippingSettings();
      case "email":
        return <div>Email settings coming soon...</div>;
      case "notifications":
        return <div>Notification settings coming soon...</div>;
      case "security":
        return <div>Security settings coming soon...</div>;
      default:
        return renderGeneralSettings();
    }
  };

  return (
    <>
    <div className="space-y-6  w-full ">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Store Settings</h1>
          <p className="text-gray-600">Configure your store preferences and options</p>
        </div>
        <button 
          onClick={handleSaveSettings}
          className="mt-4 sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center"
        >
          <FaSave className="w-4 h-4 mr-2" />
          Save Settings
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-4 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {tab.name}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-6">
          {renderTabContent()}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Settings;