import React from 'react';
import '../Sidebar/Sidebar.css'

const Sidebar = () => {
  return (
    <div className='Main-Container'>

      <div className="Main-Sidebar-div">

        <div className='Four-div'>


          <div class="rewards svelte-1v5w3dz small">
            <button class="reload svelte-1v5w3dz">
              <div class="text svelte-1v5w3dz">
                <strong class="svelte-1v5w3dz">Reload</strong>
                <span class="svelte-1v5w3dz">Bonus</span>
              </div>
              <div class="bg svelte-1v5w3dz"></div>
              <img src="https://jacksclub.io/_app/immutable/assets/reload-f7346bb6.svg" alt="Reload" loading="lazy" class=" svelte-1mky9ue" />
            </button>
            <button class="rakeback svelte-1v5w3dz"><div class="text svelte-1v5w3dz"><strong class="svelte-1v5w3dz">Rake</strong>
              <span class="svelte-1v5w3dz">Back</span></div>
              <div class="bg svelte-1v5w3dz"></div>
              <img src="https://jacksclub.io/_app/immutable/assets/rakeback-bc028e22.svg" alt="Rakeback" loading="lazy" class=" svelte-1mky9ue" />
            </button><button class="faucet svelte-1v5w3dz"><div class="text svelte-1v5w3dz"><strong class="svelte-1v5w3dz">Free</strong>
              <span class="svelte-1v5w3dz">Coins</span></div>
              <div class="bg svelte-1v5w3dz"></div>
              <img src="https://jacksclub.io/_app/immutable/assets/faucet-33f3426e.svg" alt="Free Coins" loading="lazy" class=" svelte-1mky9ue" />
            </button><button class="vip svelte-1v5w3dz"><div class="text svelte-1v5w3dz"><strong class="svelte-1v5w3dz">VIP</strong>
              <span class="svelte-1v5w3dz">Reward</span></div>
              <div class="bg svelte-1v5w3dz"></div>
              <img src="https://jacksclub.io/_app/immutable/assets/vip-ae380dc2.svg" alt="Vip Reward" loading="lazy" class=" svelte-1mky9ue" />
            </button>

          </div>

          <div className="Sidebar-Menu">
            <ul>
              <li><i class="fa-solid fa-gamepad"></i> All Games</li>
              <li>Contests</li>
              <li>Vip Club</li>
              <li>Jackpot</li>
              <li>Referral</li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Sidebar