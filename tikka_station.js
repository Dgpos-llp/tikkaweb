
      // debug: alert when the script actually executes
      alert('tikka_station.js has been executed');
      console.log('tikka_station.js loaded');
      window.onerror = (msg, src, line, col, error) => {
        console.error('Global error', msg, src, line, col, error);
      }
      const MENU = [
        {
          id: 0,
          name: "Scrambled Egg Tandoor Roll",
          arabicName: "قوفخملا ضيبلا لور",
          price: 0.500,
          desc: "",
          category: "Breakfast",
        },
        {
          id: 1,
          name: "Egg &Cheese Tandoor Roll",
          arabicName: "ب جلا و ضيبلا لور",
          price: 0.700,
          desc: "",
          category: "Breakfast",
        },
        {
          id: 2,
          name: "Egg, Cheese &Oman Chips Roll",
          arabicName: "نامع سطاطب و ب جلا و ضيبلا لور",
          price: 0.800,
          desc: "",
          category: "Breakfast",
        },
        {
          id: 3,
          name: "Grilled Halloumi Tandoor Roll",
          arabicName: "يوشم مولح ب ج لور",
          price: 0.800,
          desc: "",
          category: "Breakfast",
        },
        {
          id: 4,
          name: "Tikka Sandwich",
          arabicName: "اكت شيودناس",
          price: 1.100,
          desc: "",
          category: "Sandwiches",
        },
        {
          id: 5,
          name: "Spicy Tikka Sandwich",
          arabicName: "راح اكت شيودناس",
          price: 1.100,
          desc: "",
          category: "Sandwiches",
        },
        {
          id: 6,
          name: "Butter Chicken Roll",
          arabicName: "نكشت رتب شيودناس",
          price: 1.100,
          desc: "",
          category: "Sandwiches",
        },
        {
          id: 7,
          name: "Shiwa Sandwich",
          arabicName: "اوشلا جاجد شيودناس",
          price: 1.100,
          desc: "",
          category: "Sandwiches",
        },
        {
          id: 8,
          name: "Tikka Meal (Roll Cut + Fries + Drink)",
          arabicName: ")بوشم،سطاطب، عطقم لور( اكت هبجو",
          price: 1.800,
          desc: "",
          category: "Sandwiches",
        },
        {
          id: 9,
          name: "Tikka Fries",
          arabicName: "اكت سطاطب",
          price: 1.300,
          desc: "",
          category: "Sides",
        },
        {
          id: 10,
          name: "French Fries",
          arabicName: "هيلقم سطاطب",
          price: 0.600,
          desc: "",
          category: "Sides",
        },
        {
          id: 11,
          name: "Smoked Butter Chicken Sambosa (2pcs)",
          arabicName: ")ناتعطق( ةنخدملا نكشت تب هسوبمس",
          price: 0.600,
          desc: "",
          category: "Sides",
        },
        {
          id: 12,
          name: "Aloo Sambosa (2pcs)",
          arabicName: ")ناتعطق( وولا هسوبمس",
          price: 0.400,
          desc: "",
          category: "Sides",
        },
        {
          id: 13,
          name: "Plain Tandoor Bread",
          arabicName: "رونت ت خ",
          price: 0.100,
          desc: "",
          category: "Sides",
        },
        {
          id: 14,
          name: "Mint Sauce",
          arabicName: "عانعنلا ةصلص",
          price: 0.100,
          desc: "",
          category: "Dips",
        },
        {
          id: 15,
          name: "TS Signature Sauce",
          arabicName: "نشيتس اكت صوص شتنجس",
          price: 0.100,
          desc: "",
          category: "Dips",
        },
        {
          id: 16,
          name: "Chilli Garlic Mayo",
          arabicName: "راحلا لفلفلاو موثلاب زينويام",
          price: 0.100,
          desc: "",
          category: "Dips",
        },
        {
          id: 17,
          name: "Raita Sauce",
          arabicName: "بورلا صوص",
          price: 0.100,
          desc: "",
          category: "Dips",
        },
        {
          id: 18,
          name: "Karak Chai",
          arabicName: "كرك ياش",
          price: 0.300,
          desc: "",
          category: "Drinks",
        },
        {
          id: 19,
          name: "Zaffran Karak Chai",
          arabicName: "نارفعزلاب كركلا ياش",
          price: 0.400,
          desc: "",
          category: "Drinks",
        },
        {
          id: 20,
          name: "Karak Chai Pot (Serves 3 Glasses)",
          arabicName: ")صاخشا ٣( كرك قيربا",
          price: 0.800,
          desc: "",
          category: "Drinks",
        },
        {
          id: 21,
          name: "Zaffran Karak Chai Pot (Serves 3 Glasses)",
          arabicName: ")صاخشا٣( نارفعز كرك قيربا",
          price: 1.100,
          desc: "",
          category: "Drinks",
        },
        {
          id: 22,
          name: "Soft Drink",
          arabicName: "يزاغ بوشم",
          price: 0.300,
          desc: "",
          category: "Drinks",
        },
        {
          id: 23,
          name: "Water",
          arabicName: "ءام",
          price: 0.100,
          desc: "",
          category: "Drinks",
        },
      ];
      let cart = {};
      let orderType = "Dine In";

      function selectHeroService(btn, type) {
        // Update hero pills active state
        document
          .querySelectorAll(".hero-service-btn")
          .forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        // Sync with the cart order type buttons
        orderType = type;
        document.querySelectorAll(".otype-btn").forEach((b) => {
          b.classList.toggle(
            "active",
            b.textContent.includes(type.split(" ")[0]) ||
              b.getAttribute("onclick").includes(type),
          );
        });

        // Reveal menu section and hide service prompt
        document.getElementById("menu").classList.add("service-selected");
        document.getElementById("servicePrompt").classList.add("hidden");

        if (type === "Dine In") {
          // Show table selection modal — don't go to menu yet
          document.getElementById("modalTableDropdown").value = "";
          document.getElementById("modalError").style.display = "none";
          document.getElementById("tableModal").style.display = "flex";
        } else {
          // For Pickup/Delivery, go straight to menu
          document
            .getElementById("menu")
            .scrollIntoView({ behavior: "smooth" });
        }
      }

      function handleOrderNow() {
        document.getElementById("menu").classList.add("service-selected");
        document.getElementById("servicePrompt").classList.add("hidden");
        if (orderType === "Dine In") {
          document.getElementById("modalTableDropdown").value =
            document.getElementById("heroTableDropdown").value || "";
          document.getElementById("modalError").style.display = "none";
          document.getElementById("tableModal").style.display = "flex";
        } else {
          document
            .getElementById("menu")
            .scrollIntoView({ behavior: "smooth" });
        }
      }

      function confirmTable() {
        const sel = document.getElementById("modalTableDropdown");
        if (!sel.value) {
          document.getElementById("modalError").style.display = "block";
          return;
        }
        document.getElementById("heroTableDropdown").value = sel.value;
        closeTableModal();
        document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
      }

      function closeTableModal() {
        document.getElementById("tableModal").style.display = "none";
      }

      document.addEventListener("click", function (e) {
        const modal = document.getElementById("tableModal");
        if (e.target === modal) closeTableModal();
      });

      function setOrderType(btn, type) {
        document
          .querySelectorAll(".otype-btn")
          .forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        orderType = type;
      }

      // Build menu dynamically
      const cats = [...new Set(MENU.map((i) => i.category))];
      function buildMenu() {
        const tabsEl = document.getElementById("menuTabs");
        const contentEl = document.getElementById("menuContent");
        cats.forEach((cat, idx) => {
          const btn = document.createElement("button");
          btn.className = "tab-btn" + (idx === 0 ? " active" : "");
          btn.textContent = cat;
          btn.onclick = () => showTab(idx);
          tabsEl.appendChild(btn);

          const sec = document.createElement("div");
          sec.className = "menu-category" + (idx === 0 ? " active" : "");
          const grid = document.createElement("div");
          grid.className = "menu-grid";

          MENU.filter((i) => i.category === cat).forEach((item) => {
            const card = document.createElement("div");
            card.className = "menu-card";
            card.innerHTML = `
        <div class="menu-card-img"><img src="${item.img}" alt="${item.name}" loading="lazy"></div>
        <div class="menu-card-body">
          <h4>${item.name}</h4>
          ${item.arabicName ? `<h5 class="arabic-name">${item.arabicName}</h5>` : ``}
          <p>${item.desc}</p>
          <div class="menu-card-footer">
            <span class="${
              item.price !== undefined && item.price !== null ? "price" : "price-placeholder"
            }">
              ${
                item.price !== undefined && item.price !== null
                  ? `OMR ${item.price.toFixed(3)}`
                  : "Price coming soon"
              }
            </span>
            <div style="display:flex;align-items:center;gap:6px;">
              <button class="add-btn" id="ab-${item.id}" onclick="addItem(${item.id})">+ Add</button>
              <div class="qty-ctrl" id="qc-${item.id}">
                <button class="qty-btn" onclick="dec(${item.id})">−</button>
                <span class="qty-num" id="qn-${item.id}">0</span>
                <button class="qty-btn" onclick="inc(${item.id})">+</button>
              </div>
            </div>
          </div>
        </div>`;
            grid.appendChild(card);
          });
          sec.appendChild(grid);
          contentEl.appendChild(sec);
        });
      }

      function showTab(idx) {
        document
          .querySelectorAll(".menu-category")
          .forEach((el, i) => el.classList.toggle("active", i === idx));
        document
          .querySelectorAll(".tab-btn")
          .forEach((b, i) => b.classList.toggle("active", i === idx));
      }

      function addItem(id) {
        const item = MENU.find((i) => i.id === id);
        cart[id] = { ...item, qty: 1 };
        document.getElementById("ab-" + id).style.display = "none";
        document.getElementById("qc-" + id).classList.add("visible");
        document.getElementById("qn-" + id).textContent = 1;
        syncCart();
        pulse();
      }

      function inc(id) {
        if (!cart[id]) return;
        cart[id].qty++;
        document.getElementById("qn-" + id).textContent = cart[id].qty;
        syncCart();
      }

      function dec(id) {
        if (!cart[id]) return;
        cart[id].qty--;
        if (cart[id].qty <= 0) {
          delete cart[id];
          document.getElementById("ab-" + id).style.display = "";
          document.getElementById("qc-" + id).classList.remove("visible");
          document.getElementById("qn-" + id).textContent = 0;
        } else {
          document.getElementById("qn-" + id).textContent = cart[id].qty;
        }
        syncCart();
      }

      function syncCart() {
        const total = Object.values(cart).reduce((s, i) => s + i.qty, 0);
        // calculate cost if price available
        const cost = Object.values(cart).reduce(
          (s, i) => s + (i.price ? i.price * i.qty : 0),
          0,
        );
        // nav badge
        const nb = document.getElementById("navBadge");
        nb.textContent = total;
        nb.style.display = total > 0 ? "flex" : "none";
        // floating cart
        document.getElementById("fcCount").textContent = total;
        document
          .getElementById("floatingCart")
          .classList.toggle("visible", total > 0);
        // cart panel
        document.getElementById("cartCount").textContent = total;
        if (total === 0) {
          document.getElementById("cartTotal").textContent = "—";
        } else if (cost > 0) {
          document.getElementById("cartTotal").textContent = `OMR ${cost.toFixed(3)}`;
        } else {
          document.getElementById("cartTotal").textContent = "To be confirmed";
        }
        document.getElementById("checkoutBtn").disabled = total === 0;
        renderDrawer();
      }

      function renderDrawer() {
        const el = document.getElementById("cartItems");
        const items = Object.values(cart).filter((i) => i.qty > 0);
        if (!items.length) {
          el.innerHTML =
            '<div class="cart-empty"><div class="ei">🍽</div><p>Your cart is empty.<br>Add items from the menu!</p></div>';
          return;
        }
        el.innerHTML = items
          .map(
            (item) => `
    <div class="cart-item">
      <img class="cart-item-img" src="${item.img}" alt="${item.name}">
      <div class="cart-item-info">
        <h5>${item.name}</h5>
        <span class="cip">${
          item.price !== undefined && item.price !== null
            ? `OMR ${item.price.toFixed(3)}`
            : "Price TBC"
        }</span>
      </div>
      <div class="cqty-wrap">
        <button class="cqty-btn" onclick="dec(${item.id})">−</button>
        <span class="cqty-num">${item.qty}</span>
        <button class="cqty-btn" onclick="inc(${item.id}); renderDrawer();">+</button>
      </div>
    </div>`,
          )
          .join("");
      }

      function pulse() {
        const fb = document.getElementById("floatingCart");
        fb.style.transform = "scale(1.18)";
        setTimeout(() => (fb.style.transform = ""), 220);
      }

      function openCart() {
        document.getElementById("cartDrawer").classList.add("open");
        document.getElementById("cartOverlay").classList.add("open");
        document.body.style.overflow = "hidden";
        renderDrawer();
      }
      function closeCart() {
        document.getElementById("cartDrawer").classList.remove("open");
        document.getElementById("cartOverlay").classList.remove("open");
        document.body.style.overflow = "";
      }

      function placeOrder() {
        const items = Object.values(cart).filter((i) => i.qty > 0);
        if (!items.length) return;

        if (orderType === "Pickup") {
          closeCart();
          // Reset pickup form fields
          ["pmName", "pmMobile", "pmVehicle"].forEach((id) => {
            const el = document.getElementById(id);
            if (el) { el.value = ""; el.classList.remove("pm-error"); }
          });
          ["pmNameErr", "pmMobileErr", "pmVehicleErr", "pmPaymentErr"].forEach((id) => {
            const el = document.getElementById(id);
            if (el) el.classList.remove("visible");
          });
          document.querySelectorAll(".pm-payment-opt").forEach((o) => o.classList.remove("selected"));
          document.getElementById("pickupModal").classList.add("open");
          return;
        }

        showOrderConfirmation(null);
        closeCart();
      }

      function showOrderConfirmation(pickupInfo) {
        const items = Object.values(cart).filter((i) => i.qty > 0);
        // Save placed order to localStorage so user can view it later
        const placedOrder = {
          id: Date.now(),
          createdAt: new Date().toISOString(),
          orderType,
          items: items.map(i => ({ id: i.id, name: i.name, qty: i.qty })),
          pickupInfo: pickupInfo || null,
        };
        savePlacedOrder(placedOrder);
        const rows = items
          .map(
            (i) => {
              const line = i.price
                ? `OMR ${(i.price * i.qty).toFixed(3)}`
                : "TBC";
              return `<div class="os-item"><span>${i.qty}× ${i.name}</span><span>${line}</span></div>`;
            },
          )
          .join("");
        let extraHtml = "";
        if (pickupInfo) {
          extraHtml = `<div class="os-extra">
            <span>👤 ${pickupInfo.name}</span>
            <span>📞 +968 ${pickupInfo.mobile}</span>
            <span>🚗 ${pickupInfo.vehicle}</span>
            <span>💳 ${pickupInfo.payment}</span>
          </div>`;
        }
        // compute total cost if item prices exist
        const orderCost = items.reduce(
          (s, i) => s + (i.price ? i.price * i.qty : 0),
          0,
        );
        document.getElementById("orderSummary").innerHTML =
          `<h4>Order — ${orderType}</h4>${rows}${extraHtml}<div class="os-total"><span>Total</span><span>${
            orderCost > 0 ? `OMR ${orderCost.toFixed(3)}` : "To be confirmed"
          }</span></div>`;
        document.getElementById("confirmModal").classList.add("open");
      }

      // Persist placed orders in localStorage and render them
      function savePlacedOrder(order) {
        try {
          const raw = localStorage.getItem("placedOrders") || "[]";
          const arr = JSON.parse(raw);
          arr.unshift(order);
          localStorage.setItem("placedOrders", JSON.stringify(arr));
          syncPlacedOrdersBadge();
        } catch (e) {
          console.error("Failed to save placed order", e);
        }
      }

      function getPlacedOrders() {
        try {
          return JSON.parse(localStorage.getItem("placedOrders") || "[]");
        } catch (e) {
          return [];
        }
      }

      function renderPlacedOrders() {
        const container = document.getElementById("placedOrdersList");
        if (!container) return;
        const orders = getPlacedOrders();
        if (!orders.length) {
          container.innerHTML = '<div style="text-align:center; padding:24px; color:#ddd">No orders yet.</div>';
          return;
        }
        // build table markup
        let html = '<table class="placed-orders-table">' +
                   '<thead><tr>' +
                     '<th>#</th>' +
                     '<th>Date &amp; Time</th>' +
                     '<th>Order Type</th>' +
                     '<th>Items Ordered</th>' +
                   '</tr></thead><tbody>';
        orders.forEach((o, idx) => {
          const d = new Date(o.createdAt);
          const when = d.toLocaleString();
          const itemsList = (o.items || [])
            .map(it => `<li>${it.qty}× ${it.name}</li>`)
            .join('');
          html += `<tr class="placed-order-entry" data-idx="${idx}">
                    <td>${idx+1}</td>
                    <td>${when}</td>
                    <td>${o.orderType}</td>
                    <td><ul style="margin:0; padding-left:18px;">${itemsList}</ul></td>
                   </tr>`;
        });
        html += '</tbody></table>';
        container.innerHTML = html;
        // attach click handlers to rows
        container.querySelectorAll('.placed-order-entry').forEach(el => {
          el.addEventListener('click', () => {
            const idx = el.getAttribute('data-idx');
            showOrderReceipt(orders[idx]);
          });
        });
      }

      function openOrders() {
        const m = document.getElementById('ordersModal');
        if (!m) return;
        renderPlacedOrders();
        m.classList.add('open');
      }

      // display receipt in confirm modal for a historic order
      function showOrderReceipt(order) {
        if (!order) return;
        // close orders modal if open
        const oModal = document.getElementById('ordersModal');
        if (oModal) oModal.classList.remove('open');
        const rows = (order.items || [])
          .map(i => `<div class="os-item"><span>${i.qty}× ${i.name}</span><span>TBC</span></div>`)
          .join("");
        let extraHtml = "";
        if (order.pickupInfo) {
          extraHtml = `<div class="os-extra">
            <span>👤 ${order.pickupInfo.name}</span>
            <span>📞 +968 ${order.pickupInfo.mobile}</span>
            <span>🚗 ${order.pickupInfo.vehicle}</span>
            <span>💳 ${order.pickupInfo.payment}</span>
          </div>`;
        }
        const receiptHtml = `<h4>Order — ${order.orderType}</h4>${rows}${extraHtml}<div class="os-total"><span>Total</span><span>To be confirmed</span></div>`;
        document.getElementById("orderSummary").innerHTML = receiptHtml;
        const heading = document.querySelector('#confirmModal h2');
        if (heading) heading.textContent = 'Order Details';
        document.getElementById("confirmModal").classList.add("open");
      }

      function closeOrders() {
        const m = document.getElementById('ordersModal');
        if (!m) return;
        m.classList.remove('open');
      }

      function clearPlacedOrders() {
        if (!confirm('Clear all placed orders from this browser?')) return;
        localStorage.removeItem('placedOrders');
        renderPlacedOrders();
        syncPlacedOrdersBadge();
      }

      function syncPlacedOrdersBadge() {
        const badge = document.getElementById('ordersBadge');
        if (!badge) return;
        const count = getPlacedOrders().length || 0;
        badge.textContent = count;
      }

      function submitPickupForm() {
        let valid = true;
        const nameEl    = document.getElementById("pmName");
        const mobileEl  = document.getElementById("pmMobile");
        const vehicleEl = document.getElementById("pmVehicle");
        const nameErr    = document.getElementById("pmNameErr");
        const mobileErr  = document.getElementById("pmMobileErr");
        const vehicleErr = document.getElementById("pmVehicleErr");
        const paymentErr = document.getElementById("pmPaymentErr");

        const name    = nameEl.value.trim();
        const mobile  = mobileEl.value.trim();
        const vehicle = vehicleEl.value.trim();
        const payOpt  = document.querySelector(".pm-payment-opt.selected input[type='radio']");

        if (!name) {
          nameEl.classList.add("pm-error"); nameErr.classList.add("visible"); valid = false;
        } else {
          nameEl.classList.remove("pm-error"); nameErr.classList.remove("visible");
        }

        if (!mobile || !/^[79]\d{6,7}$/.test(mobile)) {
          mobileEl.classList.add("pm-error"); mobileErr.classList.add("visible"); valid = false;
        } else {
          mobileEl.classList.remove("pm-error"); mobileErr.classList.remove("visible");
        }

        if (!vehicle) {
          vehicleEl.classList.add("pm-error"); vehicleErr.classList.add("visible"); valid = false;
        } else {
          vehicleEl.classList.remove("pm-error"); vehicleErr.classList.remove("visible");
        }

        if (!payOpt) {
          paymentErr.classList.add("visible"); valid = false;
        } else {
          paymentErr.classList.remove("visible");
        }

        if (!valid) return;

        closePickupModal();
        showOrderConfirmation({ name, mobile, vehicle, payment: payOpt.value });
      }

      function closePickupModal() {
        document.getElementById("pickupModal").classList.remove("open");
      }

      function selectPayment(el) {
        document.querySelectorAll(".pm-payment-opt").forEach((o) => o.classList.remove("selected"));
        el.classList.add("selected");
      }

      function closeModal() {
        // restore heading text to default
        const heading = document.querySelector('#confirmModal h2');
        if (heading) heading.textContent = 'Order Received!';
        document.getElementById("confirmModal").classList.remove("open");
        // Clear cart completely
        Object.keys(cart).forEach((id) => {
          const ab = document.getElementById("ab-" + id);
          const qc = document.getElementById("qc-" + id);
          const qn = document.getElementById("qn-" + id);
          if (ab) ab.style.display = "";
          if (qc) qc.classList.remove("visible");
          if (qn) qn.textContent = 0;
        });
        cart = {};
        syncCart();
        // after closing, jump to top of page (home)
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }


      // Scroll reveal
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.style.opacity = 1;
              e.target.style.transform = "translateY(0)";
            }
          });
        },
        { threshold: 0.1 },
      );

      try {
        console.log('calling buildMenu');
        buildMenu();
      } catch (err) {
        console.error('Error during buildMenu:', err);
      }
      setTimeout(() => {
        document
          .querySelectorAll(".gallery-item")
          .forEach((el) => {
            el.style.opacity = 0;
            el.style.transform = "translateY(20px)";
            el.style.transition = "opacity .5s ease,transform .5s ease";
            obs.observe(el);
          });
      }, 100);
        // Initialize placed orders badge
        setTimeout(() => {
          try { syncPlacedOrdersBadge(); } catch(e) { /* ignore */ }
        }, 200);
    