# Hardware development workflow

A reusable engineering methodology for independent hardware projects, not a claim of completed qualification.

| Phase | Deliverable | Exit criteria |
|---|---|---|
| Requirements | Interface and environmental requirements | Traceable, reviewable requirements |
| Architecture | Block diagram, power budget, interface matrix | Component and architecture risks identified |
| Schematic | Design files, BOM, datasheet review | Pin mapping and power domains checked; ERC findings resolved or justified |
| PCB layout | Stackup, placement, routing constraints | DRC reviewed; impedance and return paths assessed |
| Manufacturing | Fabrication and assembly package | DFM review, revision and component availability checked |
| Bring-up | Current-limited power-up plan | Rails, clocks, reset and boot verified |
| Validation | Requirements-to-test matrix and logs | Results recorded against agreed limits |
| Release | Revision-controlled evidence | Open risks explicitly documented |

## Design review checklist
- Verify absolute maximum and recommended operating conditions independently.
- Check voltage domains, level translation, sequencing, reset, clocks and unused pins.
- Review decoupling loops, return paths, thermal paths, connector orientation and mechanical clearance.
- Derive high-speed constraints from exact component documentation and stackup.
- Review test access, assembly tolerances, part lifecycle and alternate components.

## Change control
Record revision, reason, affected requirements, reviewer, test impact and verification evidence. Never publish employer-owned designs or confidential customer data.

[Portfolio](https://jewel3g.github.io)
