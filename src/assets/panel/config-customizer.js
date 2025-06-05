
// تنظیمات سفارشی کانفیگ‌ها
function addConfigNameSettings() {
    const configSection = document.createElement('div');
    configSection.className = 'section';
    configSection.innerHTML = `
        <div class="container">
            <h3>⚙️ Config Name Settings</h3>
            <div class="form-control">
                <label>🏷️ Config Name Prefix</label>
                <div>
                    <input type="text" id="configNamePrefix" value="${globalThis.configName || 'Empress-Team 🇨🇳'}" placeholder="Enter config name prefix">
                </div>
            </div>
            <div class="form-control">
                <label>🎨 Config Style</label>
                <div>
                    <select id="configStyle">
                        <option value="modern">Modern Style</option>
                        <option value="classic">Classic Style</option>
                        <option value="minimal">Minimal Style</option>
                    </select>
                </div>
            </div>
        </div>
    `;
    
    // اضافه کردن به بخش تنظیمات
    const settingsContainer = document.querySelector('.section');
    if (settingsContainer) {
        settingsContainer.parentNode.insertBefore(configSection, settingsContainer);
    }
}

// اجرای تنظیمات بعد از لود شدن صفحه
document.addEventListener('DOMContentLoaded', addConfigNameSettings);
