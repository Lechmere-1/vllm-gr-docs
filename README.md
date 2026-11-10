# vLLM-GR documentation

Public website: [vLLM-GR documentation](https://lechmere-1.github.io/vllm-gr-docs/)

This repository hosts the generated HTML, search index and static assets for
an independent vLLM-GR documentation edition. Its 30 pages are organized into:

- User Guide: installation, examples, data/configuration, models, features and operations.
- Developer Guide: contribution, architecture, testing/CI and documentation.
- API Reference: public Python interfaces and glossary.
- CLI Reference: serving, environment checks and repository tools.
- Community: contact, governance, roadmap and release-note sections.

The first-release main model is `OpenOneRec/OneRec-1.7B` on CUDA and Ascend NPU.
Pangu is an additional NPU-only guide. Unconfirmed Maintainer/Committer names
and community plans are intentionally left pending.

Installation guides and technical contracts originate from
[vLLM-GR](https://github.com/JiusiServe/vllm-gr) at
`c4966f18a11a0aca9f05bda2e270c634c342f868`. The site adapts and adds
source-checked explanations and workflows. It is not a new framework release
or an announcement of new hardware accuracy/performance results.

Project documentation is distributed under the original Apache-2.0 license;
see `LICENSE`. Theme attribution is in `THIRD_PARTY_NOTICES.txt`, and bundled
assets retain their third-party notices.

GitHub Pages serves the root of the `main` branch. The `.nojekyll` file keeps
the prebuilt site intact. This repository contains the generated publication
artifact; the inference source tree, local development environment and Markdown
source are not part of this publication.
