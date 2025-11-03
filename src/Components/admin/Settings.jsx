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
  FaPalette,
  FaKey,
  FaUserShield,
  FaLock,
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
      maintenanceMode: false,
    },
    // Payment Settings
    payment: {
      stripeEnabled: true,
      paypalEnabled: true,
      cashOnDelivery: true,
      stripePublicKey: "pk_test_...",
      stripeSecretKey: "sk_test_...",
      paypalClientId: "A...",
      testMode: true,
    },
    // Shipping Settings
    shipping: {
      freeShippingEnabled: true,
      freeShippingThreshold: 50,
      flatRateShipping: 5.99,
      shippingRegions: ["US", "CA", "EU", "UK"],
      processingTime: "1-2 business days",
    },
    // Email Settings
    email: {
      smtpHost: "smtp.gmail.com",
      smtpPort: "587",
      smtpUsername: "noreply@easyshop.com",
      smtpPassword: "********",
      smtpEncryption: "tls",
      fromName: "EasyShop",
      fromEmail: "noreply@easyshop.com",
      orderNotifications: true,
      marketingEmails: true,
      adminNotifications: true,
      customerWelcomeEmail: true,
      orderConfirmationEmail: true,
      shippingUpdateEmail: true,
    },
    // Notification Settings
    notifications: {
      // Email Notifications
      emailNotifications: true,
      newOrderEmail: true,
      lowStockEmail: true,
      newUserEmail: false,
      paymentFailedEmail: true,
      orderShippedEmail: true,
      
      // Push Notifications
      pushNotifications: false,
      newOrderPush: true,
      lowStockPush: false,
      newUserPush: false,
      paymentFailedPush: true,
      
      // SMS Notifications
      smsNotifications: false,
      newOrderSMS: false,
      orderShippedSMS: true,
      
      // Admin Notifications
      notifyAdminOnOrder: true,
      notifyAdminOnRefund: true,
      notifyAdminOnStock: true,
    },
    // Security Settings
    security: {
      twoFactorAuth: false,
      loginAttempts: 5,
      sessionTimeout: 30,
      passwordMinLength: 8,
      forceStrongPasswords: true,
      ipWhitelist: [],
      apiRateLimit: 100,
      sslEnabled: true,
      corsEnabled: true,
      auditLog: true,
    },
  });

  const handleSaveSettings = () => {
    // Here you would typically make an API call to save settings
    console.log("Saving settings:", settings);
    alert("Settings saved successfully!");
  };

  const handleInputChange = (section, field, value) => {
    setSettings((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
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
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Store Name
          </label>
          <input
            type="text"
            value={settings.general.storeName}
            onChange={(e) =>
              handleInputChange("general", "storeName", e.target.value)
            }
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Store Email
          </label>
          <input
            type="email"
            value={settings.general.storeEmail}
            onChange={(e) =>
              handleInputChange("general", "storeEmail", e.target.value)
            }
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Store Phone
          </label>
          <input
            type="text"
            value={settings.general.storePhone}
            onChange={(e) =>
              handleInputChange("general", "storePhone", e.target.value)
            }
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Currency
          </label>
          <select
            value={settings.general.currency}
            onChange={(e) =>
              handleInputChange("general", "currency", e.target.value)
            }
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
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Store Address
        </label>
        <textarea
          value={settings.general.storeAddress}
          onChange={(e) =>
            handleInputChange("general", "storeAddress", e.target.value)
          }
          rows={3}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="maintenanceMode"
          checked={settings.general.maintenanceMode}
          onChange={(e) =>
            handleInputChange("general", "maintenanceMode", e.target.checked)
          }
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
              onChange={(e) =>
                handleInputChange("payment", "stripeEnabled", e.target.checked)
              }
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
              onChange={(e) =>
                handleInputChange("payment", "paypalEnabled", e.target.checked)
              }
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div>
            <h4 className="font-medium text-gray-900">Cash on Delivery</h4>
            <p className="text-sm text-gray-600">
              Accept cash payments on delivery
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.payment.cashOnDelivery}
              onChange={(e) =>
                handleInputChange("payment", "cashOnDelivery", e.target.checked)
              }
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>

      {settings.payment.stripeEnabled && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-gray-50 rounded-lg">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Stripe Public Key
            </label>
            <input
              type="text"
              value={settings.payment.stripePublicKey}
              onChange={(e) =>
                handleInputChange("payment", "stripePublicKey", e.target.value)
              }
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Stripe Secret Key
            </label>
            <input
              type="password"
              value={settings.payment.stripeSecretKey}
              onChange={(e) =>
                handleInputChange("payment", "stripeSecretKey", e.target.value)
              }
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
          onChange={(e) =>
            handleInputChange("payment", "testMode", e.target.checked)
          }
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
          <p className="text-sm text-gray-600">
            Offer free shipping on orders above threshold
          </p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={settings.shipping.freeShippingEnabled}
            onChange={(e) =>
              handleInputChange(
                "shipping",
                "freeShippingEnabled",
                e.target.checked
              )
            }
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </div>

      {settings.shipping.freeShippingEnabled && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Free Shipping Threshold ($)
          </label>
          <input
            type="number"
            value={settings.shipping.freeShippingThreshold}
            onChange={(e) =>
              handleInputChange(
                "shipping",
                "freeShippingThreshold",
                parseFloat(e.target.value)
              )
            }
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Flat Rate Shipping ($)
        </label>
        <input
          type="number"
          step="0.01"
          value={settings.shipping.flatRateShipping}
          onChange={(e) =>
            handleInputChange(
              "shipping",
              "flatRateShipping",
              parseFloat(e.target.value)
            )
          }
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Processing Time
        </label>
        <input
          type="text"
          value={settings.shipping.processingTime}
          onChange={(e) =>
            handleInputChange("shipping", "processingTime", e.target.value)
          }
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="e.g., 1-2 business days"
        />
      </div>
    </div>
  );

  const renderEmailSettings = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start">
          <FaEnvelope className="w-5 h-5 text-blue-600 mt-0.5 mr-3" />
          <div>
            <h4 className="font-medium text-blue-900">SMTP Configuration</h4>
            <p className="text-blue-700 text-sm mt-1">
              Configure your email server settings for sending transactional emails.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              SMTP Host
            </label>
            <input
              type="text"
              value={settings.email.smtpHost}
              onChange={(e) =>
                handleInputChange("email", "smtpHost", e.target.value)
              }
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="smtp.gmail.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              SMTP Port
            </label>
            <input
              type="number"
              value={settings.email.smtpPort}
              onChange={(e) =>
                handleInputChange("email", "smtpPort", parseInt(e.target.value))
              }
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="587"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Encryption
            </label>
            <select
              value={settings.email.smtpEncryption}
              onChange={(e) =>
                handleInputChange("email", "smtpEncryption", e.target.value)
              }
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="tls">TLS</option>
              <option value="ssl">SSL</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              SMTP Username
            </label>
            <input
              type="text"
              value={settings.email.smtpUsername}
              onChange={(e) =>
                handleInputChange("email", "smtpUsername", e.target.value)
              }
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              SMTP Password
            </label>
            <input
              type="password"
              value={settings.email.smtpPassword}
              onChange={(e) =>
                handleInputChange("email", "smtpPassword", e.target.value)
              }
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              From Email
            </label>
            <input
              type="email"
              value={settings.email.fromEmail}
              onChange={(e) =>
                handleInputChange("email", "fromEmail", e.target.value)
              }
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <h4 className="font-medium text-gray-900 mb-4">Email Preferences</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="orderNotifications"
              checked={settings.email.orderNotifications}
              onChange={(e) =>
                handleInputChange("email", "orderNotifications", e.target.checked)
              }
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="orderNotifications" className="ml-2 text-sm text-gray-700">
              Order Notifications
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="customerWelcomeEmail"
              checked={settings.email.customerWelcomeEmail}
              onChange={(e) =>
                handleInputChange("email", "customerWelcomeEmail", e.target.checked)
              }
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="customerWelcomeEmail" className="ml-2 text-sm text-gray-700">
              Welcome Emails
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="orderConfirmationEmail"
              checked={settings.email.orderConfirmationEmail}
              onChange={(e) =>
                handleInputChange("email", "orderConfirmationEmail", e.target.checked)
              }
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="orderConfirmationEmail" className="ml-2 text-sm text-gray-700">
              Order Confirmations
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="shippingUpdateEmail"
              checked={settings.email.shippingUpdateEmail}
              onChange={(e) =>
                handleInputChange("email", "shippingUpdateEmail", e.target.checked)
              }
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="shippingUpdateEmail" className="ml-2 text-sm text-gray-700">
              Shipping Updates
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Email Notifications */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <FaEnvelope className="w-5 h-5 text-blue-600 mr-2" />
            <h4 className="font-medium text-gray-900">Email Notifications</h4>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Email Notifications</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications.emailNotifications}
                  onChange={(e) =>
                    handleInputChange("notifications", "emailNotifications", e.target.checked)
                  }
                  className="sr-only peer"
                />
                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            {settings.notifications.emailNotifications && (
              <>
                <div className="flex items-center justify-between ml-4">
                  <span className="text-sm text-gray-600">New Orders</span>
                  <input
                    type="checkbox"
                    checked={settings.notifications.newOrderEmail}
                    onChange={(e) =>
                      handleInputChange("notifications", "newOrderEmail", e.target.checked)
                    }
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                </div>
                <div className="flex items-center justify-between ml-4">
                  <span className="text-sm text-gray-600">Low Stock</span>
                  <input
                    type="checkbox"
                    checked={settings.notifications.lowStockEmail}
                    onChange={(e) =>
                      handleInputChange("notifications", "lowStockEmail", e.target.checked)
                    }
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                </div>
                <div className="flex items-center justify-between ml-4">
                  <span className="text-sm text-gray-600">Payment Failed</span>
                  <input
                    type="checkbox"
                    checked={settings.notifications.paymentFailedEmail}
                    onChange={(e) =>
                      handleInputChange("notifications", "paymentFailedEmail", e.target.checked)
                    }
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                </div>
              </>
            )}
          </div>
        </div>

        {/* Push Notifications */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <FaBell className="w-5 h-5 text-green-600 mr-2" />
            <h4 className="font-medium text-gray-900">Push Notifications</h4>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Push Notifications</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications.pushNotifications}
                  onChange={(e) =>
                    handleInputChange("notifications", "pushNotifications", e.target.checked)
                  }
                  className="sr-only peer"
                />
                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
              </label>
            </div>
            {settings.notifications.pushNotifications && (
              <>
                <div className="flex items-center justify-between ml-4">
                  <span className="text-sm text-gray-600">New Orders</span>
                  <input
                    type="checkbox"
                    checked={settings.notifications.newOrderPush}
                    onChange={(e) =>
                      handleInputChange("notifications", "newOrderPush", e.target.checked)
                    }
                    className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                </div>
                <div className="flex items-center justify-between ml-4">
                  <span className="text-sm text-gray-600">Payment Failed</span>
                  <input
                    type="checkbox"
                    checked={settings.notifications.paymentFailedPush}
                    onChange={(e) =>
                      handleInputChange("notifications", "paymentFailedPush", e.target.checked)
                    }
                    className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                </div>
              </>
            )}
          </div>
        </div>

        {/* Admin Notifications */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <FaUserShield className="w-5 h-5 text-purple-600 mr-2" />
            <h4 className="font-medium text-gray-900">Admin Alerts</h4>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">New Orders</span>
              <input
                type="checkbox"
                checked={settings.notifications.notifyAdminOnOrder}
                onChange={(e) =>
                  handleInputChange("notifications", "notifyAdminOnOrder", e.target.checked)
                }
                className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Refund Requests</span>
              <input
                type="checkbox"
                checked={settings.notifications.notifyAdminOnRefund}
                onChange={(e) =>
                  handleInputChange("notifications", "notifyAdminOnRefund", e.target.checked)
                }
                className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Low Stock</span>
              <input
                type="checkbox"
                checked={settings.notifications.notifyAdminOnStock}
                onChange={(e) =>
                  handleInputChange("notifications", "notifyAdminOnStock", e.target.checked)
                }
                className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="flex items-start">
          <FaShieldAlt className="w-5 h-5 text-red-600 mt-0.5 mr-3" />
          <div>
            <h4 className="font-medium text-red-900">Security Settings</h4>
            <p className="text-red-700 text-sm mt-1">
              Configure security preferences to protect your store and customer data.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-900">Two-Factor Authentication</h4>
              <p className="text-sm text-gray-600">Require 2FA for admin access</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.security.twoFactorAuth}
                onChange={(e) =>
                  handleInputChange("security", "twoFactorAuth", e.target.checked)
                }
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-900">SSL Certificate</h4>
              <p className="text-sm text-gray-600">Enable HTTPS for secure connections</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.security.sslEnabled}
                onChange={(e) =>
                  handleInputChange("security", "sslEnabled", e.target.checked)
                }
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <h4 className="font-medium text-gray-900">Audit Log</h4>
              <p className="text-sm text-gray-600">Log all admin activities</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.security.auditLog}
                onChange={(e) =>
                  handleInputChange("security", "auditLog", e.target.checked)
                }
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Max Login Attempts
            </label>
            <input
              type="number"
              value={settings.security.loginAttempts}
              onChange={(e) =>
                handleInputChange("security", "loginAttempts", parseInt(e.target.value))
              }
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              min="1"
              max="10"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Session Timeout (minutes)
            </label>
            <input
              type="number"
              value={settings.security.sessionTimeout}
              onChange={(e) =>
                handleInputChange("security", "sessionTimeout", parseInt(e.target.value))
              }
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              min="5"
              max="240"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Minimum Password Length
            </label>
            <input
              type="number"
              value={settings.security.passwordMinLength}
              onChange={(e) =>
                handleInputChange("security", "passwordMinLength", parseInt(e.target.value))
              }
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              min="6"
              max="20"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <h4 className="font-medium text-gray-900 mb-4">Advanced Security</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="forceStrongPasswords"
              checked={settings.security.forceStrongPasswords}
              onChange={(e) =>
                handleInputChange("security", "forceStrongPasswords", e.target.checked)
              }
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="forceStrongPasswords" className="ml-2 text-sm text-gray-700">
              Require Strong Passwords
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="corsEnabled"
              checked={settings.security.corsEnabled}
              onChange={(e) =>
                handleInputChange("security", "corsEnabled", e.target.checked)
              }
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="corsEnabled" className="ml-2 text-sm text-gray-700">
              Enable CORS Protection
            </label>
          </div>
        </div>
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
        return renderEmailSettings();
      case "notifications":
        return renderNotificationSettings();
      case "security":
        return renderSecuritySettings();
      default:
        return renderGeneralSettings();
    }
  };

  return (
    <>
      <div className="space-y-6 w-full px-4 bg-red-700 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Store Settings</h1>
            <p className="text-gray-600">
              Configure your store preferences and options
            </p>
          </div>
          <button
            onClick={handleSaveSettings}
            className="mt-4 sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center transition-colors duration-200"
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
                    className={`flex items-center px-4 py-3 border-b-2 font-medium text-sm whitespace-nowrap ${
                      activeTab === tab.id
                        ? "border-blue-500 text-blue-600 bg-blue-50"
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

          <div className="p-4 sm:p-6">{renderTabContent()}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Settings;