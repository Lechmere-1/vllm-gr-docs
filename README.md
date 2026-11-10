# vLLM-GR documentation preview

Public website: https://lechmere-1.github.io/vllm-gr-docs/

This repository hosts the generated HTML, search index and static assets for
the vLLM-GR documentation preview:

- Home
- Quickstart
- CUDA GPU installation
- Ascend NPU installation
- First offline inference (CUDA and Ascend NPU)
- Online serving (CUDA and Ascend NPU)
- Beam parameters and modes
- Validation and benchmarking

The installation guides originate from [JiusiServe/vllm-gr](https://github.com/JiusiServe/vllm-gr)
at `c4966f18a11a0aca9f05bda2e270c634c342f868`. The preview adds a homepage,
navigation and styling, adapts links for a standalone documentation site, and
adds a Quickstart, inference tutorials, a parameter reference, and validation
and benchmarking guidance checked against that source revision.
It is a documentation preview, not a separate release of the inference framework.

Project documentation is distributed under the original Apache-2.0 license;
see `LICENSE`. Theme attribution is in `THIRD_PARTY_NOTICES.txt`, and bundled
assets retain their third-party notices.

GitHub Pages serves the root of the `main` branch. The `.nojekyll` file keeps
the prebuilt site intact. This repository contains the generated publication
artifact; the inference source tree and local development environment are not
part of this publication.
