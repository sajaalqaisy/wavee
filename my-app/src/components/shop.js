import React, { useState } from 'react';
import {Box, Grid, Typography, Button, IconButton} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import image2 from '../media/image2.png';

const products = [
  { id: 1, name: 'Beach Hat', price: 20, category: 'Beach Hat', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlXAjgKyhTilU0QEEl4_En893pYtBFnt9SMQ&s" },
  { id: 2, name: 'Swimwear', price: 40, category: 'swimwear', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVH-T1N87y-K97OdkxUxEsx-fJVBCHskJgug&s" },
  { id: 3, name: 'Swim Ring', price: 18, category: 'Swim Ring', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFU26ND99RJrG_hEtJmR6-iCCSbukuLqKw3g&s" },
  { id: 4, name: 'Beach Bag', price: 30, category: 'Beach Bag', img: "data:image/jpeg;base64,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" },
  { id: 5, name: 'Swimwear', price: 55, category: 'swimwear', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeBAAsf7LtgASppywzq7cA9DfTXYRcZl8pZg&s" },
  { id: 6, name: 'Swimwear', price: 50, category: 'swimwear', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu2DiJz8jC-snm3qZ8UsrhBuqpYwxV2Z-8fA&s" },
  { id: 7, name: 'Swim Ring', price: 15, category: 'Swim Ring', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh-gfuJSTEFAIjw-F1TUImZUWVp-62eSm2sw&s" },
  { id: 8, name: 'Beach Bag', price: 35, category: 'Beach Bag', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0zWgJ-iIUOyqb455tsNFkzY97YK_VrS7AJA&s" },
  { id: 9, name: 'Beach Bag', price: 22, category: 'Beach Bag', img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExIVFhUXGBcXGBgXFxcVGBoYFxgXGBgVFxoYHSggGB0lHRcVITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGi0dHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tNS0tLS0tLf/AABEIAQoAvQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEHAP/EAEUQAAEDAgMECAMECAQGAwEAAAEAAhEDIQQSMQVBUWEGInGBkaGx8BPB0TJCUuEHFCNygpKi8RYzssIkQ1NiY+I0g9IV/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAIxEAAgICAgEEAwAAAAAAAAAAAAECEQMxEiFBEyIyUQRhcf/aAAwDAQACEQMRAD8A14apQpwuLps4yMLkKS+QByF0BdAUg1AHzQl239oCjSJTQBZPpphXVIGjVnknxjZrihykZXaONDyDm5u7rpFjg3OS4XIBvoJA18h3rW/4V+HhatVzwHZTE7hw71k8W4fdcHWuQOEcewR2rgR6fgu2ftWpRZM52E/YO4mfsn7h3xoZNrytPs7bLKwJa4mAJmzhIuCN8XEiQbXmZwTWlzwwbrwTA6tzry3KulUc10gkHiDed8EaapyxpiU2j0LFPiwvrqhDTBvofCUnwXSAXbWuWxDgIJG8kaSLaazoU2pVWvAc0hzToZ+e4rFprZqpJ6ItpXuYi8Eeig+kDpqinGezzVRpEc+WneoZZbszEupPBJ6jrOAOo4js1WjfTbyyHfx5rKuod3bKIo41xYMO4w0mGuP3eR5eno4kyQVicUKBlhm/spnhMfiKzJdZnFVYXYuWkWvu46JphqWRjKTt6bJLMP8A5ZOeEuGE6vfMlPn4NrxAFgg8W1o6uYBAWA4ZwJ3dXjxRNbFA/eUtnbLDpM2XcZhGAwEqHaHeVcLV9K6vZPGpEIUgF2FKEBREBC4/HtpjmrBjGyQs9tfE5qgaLzYlYZcyiutnRiwOT9wRgNp1azzAhgV+KwrsV1TLWg34mFU3NRaA0SDqfRE0cXLCQYHuVxyyOWzqWNR0VdImNZRylpNPq5oBdABvmA+7x715ltqnSFV3wm9QEEBwc2zrwJvG9enYTEuqCoZkAEQAHSIuL29Vhtq4OpUq/Dp5jUcRDTEhptLzu0GnJJPs1iujKtw8uvDbzAnfqPJQoDIXioIcAW33EHXyPimdXZ9QO+G+mM7gQJceqftA9XUxJA5HglmOwkEEOJteRo6TabzaDPbwVqSfRLg12BEHN6nlqVXTxL6TpY8jjB9eKscC6TmntMmOCGc2DdaGL/RpdmdIwYbWhvB40HaN3aLLRNebEOzA6EXB8LFebkojAY+pRP7N5A3jVp7R89VlPFejSGZr5G9PW0Pnw7UNVHHRJcH0kB/zGQfxM08CbeKNo7SbUc0AOLSYzOECdwgankY0Kx4STNucWj1HY1UOwlMvu/ICTv5E84hTwLA9wLtyjsnCNFMNJnQFFY3BZMpZZX+zN/RDF4zK/I3ekWKfLy0C6aYgAu1uEswdJznuduCmy0uhjh8QW08onMu0MKSJdqrNmYaCXOKq2ltBzHQBZAhwvlFdC9Y8kkEPtLE/DYXIhzw0SdEk2pUdVaQBZY5snGJvgx8mACo4gP4mEzoYJo60bpSzC1eqGO3FMK+MaGG+6FwX2d1NIWHbnxM9JuoMKeJoOdRFNpgnelGB2blqGro03Wo2CP1gEjRhAnjyCGgTLtj7NFCkGgyTqe1Z3az3YXaAxJYX0iyDBALbRvIGsHvPBMunGMdRAFJxadDfzhedYvaJJhxLnTGZxkDmUrNIw8sM2099U/GbYOeHBs72mATxtPLrHigsRgKladGnRrRAadxc893qiH4w0m5aoOXc2xkkSMh0LeJ0HkdR0P2EcQwYjEAfDN6VH7pH/Uqfj5A23xpCSku/BpJx15M+7o2Gs/4ak7EPIAdULslGRY5XOIL26mW30EhLMVsp9FpfiMKGARem/OLmLNLzeY1IBnlf1naFSLLFbfxOYFhu11iOW/vVRyu6M3i6tGcobLwtYRTqtDvwvBpnuNwTylLNo9H6lMkQZG4/I70P8IMqFj9JieR0cO6DC0WAx5afgVzmp/ddqW8C07xy3LparRxq/PZlKtFwi1outXs7Zdb4QptYA17qby7M0yG3blAk7yo7awWUEbpFxex0c2NZ071pehDQ5kH7bL5TwJssJTdHRGKXZrcCx7aYzbgu0cc5+tgqcTiKlMS6ISXbmPJZ+z8lAxpTxdMPcCZPijaeMphtoCw2Dq1GdaJJTDC1XZ+vYG6TGkjS4WsHHW0rm1KgBGiHYxjGZgfZUG4V1QZiCOCYM0ULsL4IbHYkNaV6p5NAe28S0sLM1ylbKzm0wARAQOPu6Slu1i7qgONyuDNO50ejghUA/Ch9R5jQalMixkZSh8PVDKYDbHei2YZrmh03XO2bUD/qrqhyT1dy0/R/ADD0Mu8kuPoPIBKqJIc2LBPse/KxO+hJdmW6QYM1iZWZxPRVjWmo+tlI1huYnz1TTaHSBocQ25Hgs3tja7spc4kxoN3AecKE34N+KrsPo4DC1DTpNpue5xazNUceqJk5WiAPvFen0qYawACAAABwAEALyb9GNJ+IxZrP+zSaco3Bz+rPhnXrdb7KqVp0yLi/ijM7crQCsFjakuW227vWGxQ6xUwNHoQ7Xb1+75n6o53XoMePtNHpYjvQu2W3ae5XbGqTTezgZ8f7Lpd8EzkSXNr7H2BqirQ4lot+67d3Oj+Zc2RiTSqteDvg/umx+vcgOiNbrPp83AdjgSP6mhXRr3rKezTHqjZ7UrZ7FyW4R4zBhRu09kurmm6kcvVaSeMgFBPptY7K49YJVQII2iwNNtdyqo0n1ItcappXwbqraZa3hfktBhcIKbdL700hcqM2agblaZ1urMdtZ0gU2yBrARGN2YXPzRAVhxdOhDcsk30QAwrY2LAFLcXLrkGEe2lUN4CA2piCGkFenJpKzy4JtirFOGYDVV45sxbQqp9GTmGsJPU2uQS12q8zbs9PRrm5CwSBJCrqgtgs3blnaG2OeiNwOLqAlzrNOimmVdmj2PihVqtabGZj90T8kw6VOPwHRwWd6OVD+usLtHNeG9sfQO8Vp+kQmi5J6Khs8u2FsmriqpYyBAzOc6YAmN2pO4Krps2lQYcPSOdwcDVeRBLhOUDgNbdt096H7WZhTi3uiRSL2g/eNMkBneXjwWF2xmNIPf8AaqVM53SCJEcouO1aY492Tlm+0ej/AKKKAFKoR+Jo8Gz8ytxijZZX9F1CMEH/AI3ud4Qz/YVpce6yzntlR8GX20ZBWKxI6xWq25V1WWeLqYmrQp2zT6gPNBbMfDzzBHz+qbbWb+zSOkYIK68Xug0ceX25Ew/o/Wy4xv8A3EDzn5J1XbD3DmVnh+zrUX82u8HmfJabEtmq6OKzyaTLxfJo3eFrH4VNrRfI2/8ACEk/UGmq5zrkLR1BlZAtAA8Akmy2n4zgTqUnoaZpNnO/ZgxCuD95UPiACBuQ1XGDQ2S5UTxLn44FpEaJTjHNdByoWjjMz3AaKbsWNLKW7KSo0Qx1rBKqFN7s4e2ZmE+bQbwVrWBdryX4ORQo81x+ONF2WCsrtNpc/OAZK9qxGzKTzLmAlQGyKH4B4LnSpmzdnkvR5oz9dpPcVrX9ZsBptwC2VPZtIaMHgr2YZg0aEmrdjUqMVssObUa5zSMpBvyWwxtPMwhZ3pJiwXZRYDVaDBVc9JpOrmNPiAVEkawZ5D0gwgD3tvBQXTnFNe+mKf8AltlrN3UY1jWHvAnvWl6X0IqTzWKxeGNTEUaV+u8MH8bmtV4JLuw/Ii3TR7f0RwnwsHh2HUU2k9rhmPmSrtpPsUcwQ2BoBASDbFeJWEmaRRlNuV7pMrtoV8zkO1yEaMF2o6G9vzSEBONovlwHf9PmltVkErr/ABvo4vyfsu2tE0Obf/z+a1NNpqVobaTDewWB8BKxOPrSWD8LY/qcfSF6F0cZ188TA7dfZUZVSS/pWJ23L+GkLS4BoJgCJJk2481nukwdRaHh0EaJ1iMYWEw0+BSLHUn13hzmuyt3QpTQ6ei7Y3SlhH7SQ7nZMWYgYg9UiFk9q4F1Q5W0nW4Aq3ZWAxNMgta6ytRVdENtOjZYfZBZMRdDYfYJdJeTrxVuCdiCJecvJFVq7xbN5KWhpse51Nr1HKrAAFRmAbc2gaTGlupuZE74hVbJ2hUdSD6jRJmItbdvQG3MJVrVi0fZEDsA1Pr4J38INYG7oj3Kyt2bUqAn7dj7hKtbtlptBHbZcdQEzA7bewq3tExA8LWvp2SlyYcY/RndqhjnE5ze+6fAkLYYTGMqjNTBDbNAcIIygDcvOtr1C55tpA7+cd60fQeoclRs6OnxaPop5PRrwWwPphhJJKy/RvDB2Pw0/de4+FN5C9F6R4fMyV57s53wsbQe6w+IB/PLJ/qlC2abies4t0NWK2/itbrW7Sd1V530hry6EtsIaEzzJXxMBfAIbH1IbA328VW2JulYB8TM8nnbsFguYphzciB9E12XslpiTw0j5ru28CwVKYbMFvHmt8bqXRzZKcezNY+JEcI8/wA17d0AwMYOnUIvVa1/8MCPme9Yno10boYhzxWp5g0W6z2wbH7pE9/BbrYOEbhm5aWYN/A57nNEb2ySR3Kskk32Zxi1o0LcM3eApfq7fwhZ3G9IatN0BrTa9jG7nzVVHpeTrSE8iR6grO0VxZpm4dv4QpigBuCyzOmjAYdSd2hwPyCZUOlFJ33X6xu+qdoXFjN2Fa7cuswLOASw9IqIknMANTA5853IrA7SZWbnpOzNmJgi8A7+1FoKaJ0hIur40UQV0clRIHUPXceJ/sVzNJ0+Su/V41uYMqkwD8/NYmx9kj8kr21iQ0ZR9o28fylHYh8DTvSPGNJJOpGniQDHZ6pMpCHDYRztCYn+ye9HWup1HNdHWE+B+hUQ1rQDbed2m76KNCtFQO3A37NN/afBZs1TNJimhzYK836X4QiS20SZ+YXotR1llek9HOwtGpQn2UtDrGbQnDsefvMa7xAPzXneMq5nkp5tvaAyNpt0DQ0dgACzwVIPFEmiEuxBzVAOF/ojq74CB2cwklx3lVH7Im+qNDstsR3e9FZjNmfFqMMxBDYiZv3KOF098Ez2e2atPhnb6q02naMpK0aHZexvgZutmBgfZy6XmS4zrHcjKdjccZvP9kSdASeBiw5JZUcXOJmwn5pN3slIUbYYS+RHHT5pYQW+JlO8UyTcfXXTkllQ6cz9Uixc5pJM+5TXZbSSBl1PzJCBDetbx4Jox2SOfDgkxltfq03l7TMEDhv396a9BCBhf/sf8kuq0s7TNhI4Ty9E56K0gcODuL6hHZncB6Jw2RPQzBVlFDUWO3lE0Rr3e/RavRktkqlggni54Acve5GVGzHv3uQNZ3Hms2aIB2g+YA0+Q9+aXVoDRPZ2q59bUndYadv18EtxBcSNbcdez0ChmiLX6QROm42i/wAgqm0wSTuPhwj0XKYJB+vYPC3mjTRgWG4D33KSrGWFqZqcbwIPhI8iEg2y6JlNNnVofBNna9u4++KF2/ggbyAFLRpFmIxDpcqir8U0ZjBkKioYCsALGvnq8fRG4KnACEoU8zsx9hNcOzluVGTduwyiOHvf9Ez2TTmtTA/EOOg/sUBTHv33J70XpzXmJytN7b7fMpks1AOtt3LigaLJMdvC2iKfeQLCTqh6jraQL+/VBKFuL1juSfFG9t0n+6aYh+vb7ACT4gmY3mR2QfLekUCGoQTdMHVgRxjuAEX9EvfSur2S1pBQxlmzq81wCTBme4GPRbvo4AMLRtq0u/mcXfNedYI5arDz17l6bsdv7CiP/Gz/AEhXDZnkOwrGRl99iplWzYD3qqkZx2VPdeeE8NdyCxhhvdf8vFGNg++Z+iFxuh04m06brrM0QmYwudynnuj81Q2iJdfieFtbeaOqWEDfr2G3qUux+J+GycsknK1v4nmzRbvk7hJ3KUi7LnFlIZjYADv3ADmXGBzKH2c9z3VHF1iQNZaHNzBzW8QOqyd5aUFUa+vWFIHqUgDVeOqfiOFms4EAkzuzA6gLRUaQaGta0BoFhAEAbuSqqRN2wR7Yved1u66U9Ka7mgTo4Jpi62RrjabNAOhcbAchMTwErmzpfSBqgHNmMFoEtLjlMHQ5YMbiVPE0U6Zg8yofLjyXo+0MK19J1MQJAiBYHUHxAWJxOFNInOIi/GRy4oUR87QJSABy74nz9+BTKmyPfv2EJs6iSfiHfMcOtEkcRZrQd+Wd6aNF1bVEJ2So07xqfzj1Wy2Lgvgsg/aMF3Lkez6qrYeycga9wl5gifui+7ibXTQhw47vQkmQglsoeTMm3ZxJ/PyQtc27B4yUViLjjr8vqgq792u7x4JMELKu+8WPbp+SV1WkvN7BzuVi4fVG18S0OFO+YjcJA1jMZsCAY4wUDi3zokUcJANvP3yVFR5sFI2txVT9UmUiuo64jdJXrWFZDGDg1o8AF5I9kkCdbL2EgLTGZZRfnGiJe63d77ECKIz5t6MrO99iciIkBHG/pb80DiH27/y70W/T3xQlbQQoZohZWwbS5xIMkiSHFpm+8HsWeqw576vXLaTiyiC9zs9UnIXAvJtJFMHk4rR7VDzTf8MHPldliJmIluYgTGkxeFlceKrXhjOoyjTzRYtpk9SmXE/acJc4k9URN4k1FEyY2w2FGHpgvrPuSXmGnM9xlxhrc1zJidOQTR74BkRbXtMHTkCUqxQdVfTIYX06YcQS4BrqvVhxkyWNBdBAN77gSZiiadFz3uLoDnk6WaJIaBppYXPOUMaAcTTFas2nP7Omc1Tm5wIbTPLK4k8iOKbl4jT3r8/RIsJUqMGVtL4jgHPqw4T8VwDvhieVuQyDfYOjtF9FhDWmrVIFSoXBzQS6BlbN90ZtJtc9UPjYuRpqZm2s37dN51tCXY+gzEvbRcAWMh9QTqTOSnO6YLjyDR95ff8A9lmZzhBpsJbUqZrBwaTlb+M3AMcRqruj1Zppl8w51QveY+8/KWsEiHQ1zG2MaISoG7C6ewaJ0Dm66O4fvBH4PYtKkZAJO4uvBjgLKraFbJRIaYe4tpNNiQ6o4NB0i0k9ytxGNmowB4ayC4ixdUbcNtEnM4EjLuYSdQAqCwltQZhc3v8ATt3qb9L+E7hCUYjaOR9WoQ4MpNDQ0Xc97m5z1Z0DXNN9OV1zGbXIw9R4pPa9oLQIMZ7AAucAD1jBibg62KKCw6u+baD8reaWYmoIvaJ7vfzS7aWIcykyk2qGWbSFQkS54BzOk7hDjOrnCBGpo2viy8NotDh8WWmoRENaGh74MOJ5hsS4KaKsW4V/xHmtfTs61QNMQfwsFMdpciKLZudOF+P90Fs9gDnZTLGfs2ND5L3Q173O3TmJvuvyTOvTiYjn6x6olscdA9d4JJVTbklRe9fZDqLqSyWEZmr02kXL2DxcF6y5eX9Hm5sZSB/FP8oJ+S9OLlrj0Y5NgjdQu1J119hQpC4X1WZSmKBx5t71n+6Frjj5cPcomdO1DVW67vz9woLRRNj/AG3pZs/DuaXufZ9R5c6Lw2zWCd8NaO+Uyqk8N48te5Qpm8jx49idjo+Akxu07Pc+SA23hHvpltMNJJYYcSAQHtc4EgGxAO5MKIk9oPnp6BdrXk8Pem/VNMTQDgsNkaBmkiS5xnrOMuLu8k20Gm5fYhrXBweGlpEEEAgi9iN/YiwbH36IJ7Ljx98dfRAULsfs9lSpTpNY0F/WqOAgikzKMoMWzEMb2A8E7p7NDSTmJGYkNtDSTciACYuBwFlPD02l02mwJ374E79571bj8TkZ1ftu6rJ0zGTJuLABziODSi2KhXjaQxFYYcOj4QNV5F4cRlpNPi50cGxvT/ZuBbSYbgue7M51+AAEkkxAGp48Uo6J4cCmau+q4vBOpZpTJPEtGY83lO8TVtu4e+SG/Akr7K8Xhqbg4OYCXtyk6EtO4uF0h6ROaRRwwOUVKgkD7WWmfiPIPGQL6y5OXVLdqyoqfExTak2awuEfhLgymR2xXd/EOCSKaCsDgW0nOcSCYythsEMmbmTmPlAEAJftWnUdUJaCA5gaKgI6nXOeATJJGUjmE0zzbmLdv5KOL07vy79Qly7HQvw2Da1oysAJAbIAzEAQATvEc1RihZ3b9RfyTD4mkcoHESbeOVLsS719/JAxeXaKTnduqgd3eulDGOehFLNiwfwte7xGX/cvRCFhf0fN/bVHcKfq4fRbkuWsNGM9glMiTyBVr+G9U4WlEk62E9p/JXVDBn5cipkESpwjz7TogcTVvbl7+aKrPBB7It6++SX1ok9vcs2aIgDcn3AlSzW7T4D2AuNjy8olQL585996BkqL9e7vXzn7p77kcPmqs+p37vAx2LoqAEH5759+KLCi2poZtPHnaVCswGPfehHOLiCTYR3kGfkiRVMm45d3Yiwouw7CDp6bpt5JftbEfEzBuri3DsjUZ4dWc3saP6DxRNSoYMnt03yg6eGYys6oAZMiC4kDMGhxa02E5QTAv3qlJEuI6Y4ABoGgaABwiAPBQxFbS/53Pgga+OBPV3+7oerifTyI3eKlspI7tnExTLWuh1QimCIkZruI4ZWZj/CgMEZfVfAAzBjOGSl1I/mFRVbSPxBAeWlplrmwSLOEwbfZJHmrMMAxrWt0a0AA3te5O870X0Fdl7X7+wr6tV4CDOg5j+6rJ9+/d1W8wCYNud5gylY2RYbxrp5cuzgga7/kPfgjifQnjADT848EBitSZlMAdy+3KDjdWEW7pQxo0/6OxeseVMeOc/RbErJ/o6b1Kx4uYPAO+q1jltHRzz2V0BbvVGIcpYrENYxs8z78Qs1jdpZnRMDtvHuVnN9mkI9DHE4kCYjSffcgBWJOv3koxmOnTRfYfE6Hf2rKzWhvRqW7lW6vrJ3HzOoQdTGgDX05+ST18cT2cE7Ch+3FDdEfWfoq/jyef5rPioTvRtGsBE7iiwoeUniw4R6wFypidfAe5S79cjQ7wezl5rhrAkxyj370RYqDX1Znh81S+qTmtq4+ZUW8N6udRO6PtA34THaiwIjUzI1+vzQWNrRA4/lZTxWIMkdiErNmPfcixpHKNWbHfY+aPaTJ7J38+KWhsIqlWtfx196lIAptzHh4lXZJE++f0Q+HBN/l71RzLtva9vH6IsAV7fSL753oLFMkacT38eXjwTZ1/K3h8gg6zOqR9fJUmKhKW3UXGR75Imsy57UJUsmBuf0fN/Y1D/5PRrfqtMVnOgP/AMZ3Oo7/AEsC0LlvHRzy2JNqbOdVMirl0gZZtGmo4JRW2BkuapMn8Gn9S0gaHc+F1N9ORBUOCY1NozX+HGEiaxE6ANH1Vo6JjdWd/KPqntPDNBmLhXZkLHEPUkZz/CX/AJv6P/ZDu6FGbVh/J/7LVgr7Mn6cQ9SRkx0OcP8AnN/kP1Uz0Of/ANZv8p+q1S63VL04j9SRj/8ADNQf8xngQl20KRw7gKhFxILZNtOAW2cbntPqsv00oy1j+BIPeJHosGuzpXYrp7Spj7/keXJWnbNP/qDjo7fruSAsVT6aKHRo6RbUkseHcRvHONY5qwU1k4i6Jp7SrN0qE/vdb1Q4hRpKtG1lQWwUvo9IiPt0wf3Tl4agzz8kTS2rSfP22/vAH/SSimIa7PfDodEH1i3vsRFR0AE8d2631SqhtCi4WqM7zl47nQia+Jlsb734iISEE/FnlP0v75qTqXVvvgcfeiAwZOaSN3vVNXaaEa6IEJMbRuT2cOaXYhtk9xQkHTXf3X9UixjdxPuVcWDN90EH/CDm959B8k9c5Z3oUCcIA0xD3jzn5p8agGoldCfRyy2CVGEMIYIO6F9RpvDesb+K7RrSNIVhdvRQWUuc+BHeoUGEEz3K2pUMWF180kC9zwSGW33LnxBxXGVXX0hVMpgEnimIuBUs3HRQzAKYcgAWuesfe5J9r0s7HNO8W7RofFN8Yet2j0SnGLln8jsx9pGF011XXNR228JldnGh17UCxNMsoqMVDgjXhUPamANCtbZrjwH5BfQpYizI4n80yWBtC2/6NWj4lUG4yCxuPtDcsY0Lb/o3Z1qx/wC1o8Sfoqjszn8TY1dnUXf8sDst+SGrbFH3XEdt/MaJkIC456txRzqTRl8XsStIhrXDfBGnYYKT7QwIbJcHC2hBGp0vvW+lSa6ZG5R6a8FrK/Ij6BtLcKZFjUcW9kNE+IKeErjjaBAHJRJWi6M27ZQHKWdVN1K7SF0wLYUGGdyIKqdqUCIPeoudyUwEFjHGW3+8lY0gmhP3jKtAVYXaugQBHHMsDwPqk+L0TrGfYPd6hJcboufLs6sD6E+IEy0ixSOrQLDHh2J1V3oXHj9mDzUJm7FjwqXBE1EM5WSUqOL0b3/JSco4n7vf8lSJZABbr9HDf87+D/csM1bz9HP2K37zPRycdmeT4mvcVElcJUStTmJSvgYEKBXyAJZoCg56+cqnIA//2Q==" },
  { id: 10,  name: 'Beach Hat', price: 20, category: 'Beach Hat', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSGklabbYPjnysiJpMOCbkx3b7Yiwq1IwUow&s" },
  { id: 11,  name: 'Beach Hat', price: 20, category: 'Beach Hat', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc0-MOriX7EZwex3XSYqiAPrYuOqDVophHvg&s" },
];

export default function Shop() {
  const [category, setCategory] = useState('swimwear'); 
  const [quantities, setQuantities] = useState({});
  const [cart, setCart] = useState([]);

  const handleQuantityChange = (id, change) => {
    setQuantities((prev) => {
      const current = prev[id] || 1;
      const newQty = Math.max(0, current + change);
      return { ...prev, [id]: newQty };
    });
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    setCart((prev) => [...prev, { ...product, quantity }]);
    alert(`${product.name} added to cart!`);
  };

  const filteredProducts = products.filter((p) => p.category === category);

  return (
    <div
      style={{
        backgroundImage: `url(${image2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '40px 20px',
        color: 'white',
        textShadow: '1px 1px 4px rgba(0,0,0,0.7)',
      }}
    >
      <Box>
        
        <Typography variant="h3" align="center" sx={{ fontWeight: 'bold', color: '#003366', mb: 5  , marginTop:"50px"}}>
           shop all product
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
          <Button
            variant={category === 'swimwear' ? 'contained' : 'outlined'}
            onClick={() => setCategory('swimwear')}
          >
            Swimwear
          </Button>
          <Button
            variant={category === 'Beach Bag' ? 'contained' : 'outlined'}
            onClick={() => setCategory('Beach Bag')}
          >
            Beach Bag
          </Button>
          <Button
            variant={category === 'Swim Ring' ? 'contained' : 'outlined'}
            onClick={() => setCategory('Swim Ring')}
          >
            Swim Ring
          </Button>
          <Button
            variant={category === 'Beach Hat' ? 'contained' : 'outlined'}
            onClick={() => setCategory('Beach Hat')}
          >
            Beach Hat
          </Button>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Box sx={{
                padding: 3,
                backgroundColor: '#fff',
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                height: '100%',
                color: '#000',
              }}>
                <img src={product.img} alt={product.name} style={{
                  width: '100px',
                  height: '100px',
                  objectFit: 'contain',
                  marginBottom: '16px'
                }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#001f4d' }}>
                  {product.name}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#004c8c', fontWeight: 'bold', mb: 1 }}>
                  ${product.price}
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
                  <IconButton onClick={() => handleQuantityChange(product.id, -1)}>
                    <RemoveIcon />
                  </IconButton>
                  <Typography sx={{ mx: 2 }}>
                    {quantities[product.id] || 1}
                  </Typography>
                  <IconButton onClick={() => handleQuantityChange(product.id, 1)}>
                    <AddIcon />
                  </IconButton>
                </Box>

                
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ backgroundColor: '#004c8c' }}
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
