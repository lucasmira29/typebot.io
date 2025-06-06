import type { BlockWithOptions } from "@typebot.io/blocks-core/schemas/schema";
import { InputBlockType } from "@typebot.io/blocks-inputs/constants";
import { IntegrationBlockType } from "@typebot.io/blocks-integrations/constants";
import { LogicBlockType } from "@typebot.io/blocks-logic/constants";
import { EventType } from "@typebot.io/events/constants";
import type { TEventWithOptions } from "@typebot.io/events/schemas";
import type { ForgedBlockDefinition } from "@typebot.io/forge-repository/definitions";

export const getHelpDocUrl = (
  nodeType: BlockWithOptions["type"] | TEventWithOptions["type"],
  blockDef?: ForgedBlockDefinition,
): string | undefined => {
  switch (nodeType) {
    case LogicBlockType.TYPEBOT_LINK:
      return "https://docs.typebot.io/editor/blocks/logic/typebot-link";
    case LogicBlockType.SET_VARIABLE:
      return "https://docs.typebot.io/editor/blocks/logic/set-variable";
    case LogicBlockType.REDIRECT:
      return "https://docs.typebot.io/editor/blocks/logic/redirect";
    case LogicBlockType.SCRIPT:
      return "https://docs.typebot.io/editor/blocks/logic/script";
    case LogicBlockType.WAIT:
      return "https://docs.typebot.io/editor/blocks/logic/wait";
    case InputBlockType.TEXT:
      return "https://docs.typebot.io/editor/blocks/inputs/text";
    case InputBlockType.NUMBER:
      return "https://docs.typebot.io/editor/blocks/inputs/number";
    case InputBlockType.EMAIL:
      return "https://docs.typebot.io/editor/blocks/inputs/email";
    case InputBlockType.URL:
      return "https://docs.typebot.io/editor/blocks/inputs/website";
    case InputBlockType.DATE:
      return "https://docs.typebot.io/editor/blocks/inputs/date";
    case InputBlockType.TIME:
      return "https://docs.typebot.io/editor/blocks/inputs/time";
    case InputBlockType.PHONE:
      return "https://docs.typebot.io/editor/blocks/inputs/phone-number";
    case InputBlockType.CHOICE:
      return "https://docs.typebot.io/editor/blocks/inputs/buttons";
    case InputBlockType.PAYMENT:
      return "https://docs.typebot.io/editor/blocks/inputs/payment";
    case InputBlockType.RATING:
      return "https://docs.typebot.io/editor/blocks/inputs/rating";
    case InputBlockType.FILE:
      return "https://docs.typebot.io/editor/blocks/inputs/file-upload";
    case IntegrationBlockType.EMAIL:
      return "https://docs.typebot.io/editor/blocks/integrations/email";
    case IntegrationBlockType.CHATWOOT:
      return "https://docs.typebot.io/editor/blocks/integrations/chatwoot";
    case IntegrationBlockType.GOOGLE_ANALYTICS:
      return "https://docs.typebot.io/editor/blocks/integrations/google-analytics";
    case IntegrationBlockType.GOOGLE_SHEETS:
      return "https://docs.typebot.io/editor/blocks/integrations/google-sheets";
    case IntegrationBlockType.ZAPIER:
      return "https://docs.typebot.io/editor/blocks/integrations/zapier";
    case IntegrationBlockType.PABBLY_CONNECT:
      return "https://docs.typebot.io/editor/blocks/integrations/pabbly";
    case IntegrationBlockType.HTTP_REQUEST:
      return "https://docs.typebot.io/editor/blocks/integrations/http-request";
    case InputBlockType.PICTURE_CHOICE:
      return "https://docs.typebot.io/editor/blocks/inputs/picture-choice";
    case InputBlockType.CARDS:
      return "https://docs.typebot.io/editor/blocks/inputs/cards";
    case IntegrationBlockType.OPEN_AI:
      return "https://docs.typebot.io/editor/blocks/integrations/openai";
    case IntegrationBlockType.MAKE_COM:
      return "https://docs.typebot.io/editor/blocks/integrations/make-com";
    case LogicBlockType.AB_TEST:
      return "https://docs.typebot.io/editor/blocks/logic/ab-test";
    case LogicBlockType.JUMP:
      return "https://docs.typebot.io/editor/blocks/logic/jump";
    case IntegrationBlockType.PIXEL:
      return "https://docs.typebot.io/editor/blocks/integrations/pixel";
    case LogicBlockType.CONDITION:
      return "https://docs.typebot.io/editor/blocks/logic/condition";
    case LogicBlockType.WEBHOOK:
      return "https://docs.typebot.io/editor/blocks/logic/webhook";
    case EventType.COMMAND:
      return "https://docs.typebot.io/editor/events/command";
    default:
      return blockDef?.docsUrl;
  }
};
