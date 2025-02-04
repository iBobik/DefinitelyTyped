import { GraphQLSubscriptionConfig, OperationType, requestSubscription } from 'relay-runtime';

export function useSubscription<TSubscriptionPayload extends OperationType>(
    // The actual subtype of OperationType is required to allow for type inference inside GraphQLSubscriptionConfig.s
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    config: GraphQLSubscriptionConfig<TSubscriptionPayload>,
    requestSubscriptionFn?: typeof requestSubscription,
): void;
